import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';
import {
  SKEPTIC_SYSTEM_PROMPT,
  STRATEGIST_SYSTEM_PROMPT,
  OPERATOR_SYSTEM_PROMPT,
} from '@/prompts/war-room';

export const maxDuration = 60;

const MODEL = 'gemini-2.5-flash';
const VALID_STATUS = ['VALIDATED', 'UNVALIDATED', 'NEEDS_INFO'];

// সাধারণ রেট লিমিট: প্রতি IP থেকে ঘণ্টায় ২০ বার (API কোটা বাঁচাতে)
const hits = new Map<string, number[]>();
function isLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 3600_000);
  if (recent.length >= 20) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'সার্ভারে GEMINI_API_KEY সেট করা নেই।' }, { status: 500 });
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (isLimited(ip)) {
    return NextResponse.json(
      { error: 'অনেকবার চেষ্টা হয়েছে। কিছুক্ষণ পর আবার চেষ্টা করুন।' },
      { status: 429 }
    );
  }

  let idea = '';
  try {
    const body = await req.json();
    idea = String(body.idea ?? '').trim();
  } catch {
    /* খালি থাকলে নিচে ধরা পড়বে */
  }
  if (idea.length < 10) {
    return NextResponse.json({ error: 'আইডিয়াটা আরেকটু বিস্তারিত লিখুন (কমপক্ষে ১০ অক্ষর)।' }, { status: 400 });
  }
  if (idea.length > 1500) {
    return NextResponse.json({ error: 'আইডিয়া ১৫০০ অক্ষরের মধ্যে লিখুন।' }, { status: 400 });
  }

  const ai = new GoogleGenAI({ apiKey });

  const ask = async (system: string, prompt: string) => {
    const res = await ai.models.generateContent({
      model: MODEL,
      contents: prompt,
      config: { systemInstruction: system, temperature: 0.7 },
    });
    return (res.text ?? '').trim();
  };

  try {
    const skeptic = await ask(
      SKEPTIC_SYSTEM_PROMPT,
      `উদ্যোক্তার আইডিয়া:\n${idea}\n\nআপনার বিশ্লেষণ সর্বোচ্চ ১৫০ শব্দে দিন।`
    );

    const strategist = await ask(
      STRATEGIST_SYSTEM_PROMPT,
      `উদ্যোক্তার আইডিয়া:\n${idea}\n\nSkeptic বলেছেন:\n${skeptic}\n\nSkeptic-এর পয়েন্টগুলোর প্রতি সাড়া দিয়ে আপনার কৌশলগত বিশ্লেষণ সর্বোচ্চ ১৫০ শব্দে দিন।`
    );

    const operator = await ask(
      OPERATOR_SYSTEM_PROMPT,
      `উদ্যোক্তার আইডিয়া:\n${idea}\n\nSkeptic বলেছেন:\n${skeptic}\n\nStrategist বলেছেন:\n${strategist}\n\nএবার বাস্তবায়নের দিক থেকে আপনার বিশ্লেষণ ও প্রথম সপ্তাহের ৩টি কাজ সর্বোচ্চ ১৫০ শব্দে দিন।`
    );

    // Assumption Map: JSON আকারে
    const mapRes = await ai.models.generateContent({
      model: MODEL,
      contents: `নিচের স্টার্টআপ আইডিয়া ও তিন বিশেষজ্ঞের আলোচনা থেকে ৫ থেকে ৭টি মূল অনুমান (assumption) বের করুন।

আইডিয়া: ${idea}

Skeptic: ${skeptic}

Strategist: ${strategist}

Operator: ${operator}

প্রতিটি অনুমানের status হবে ঠিক এই তিনটির একটি:
- VALIDATED: আইডিয়া বা সাধারণ জ্ঞান থেকেই যথেষ্ট প্রমাণিত
- UNVALIDATED: ধরে নেওয়া হচ্ছে কিন্তু যাচাই হয়নি
- NEEDS_INFO: সিদ্ধান্তের জন্য আরও তথ্য দরকার

শুধু এই JSON ফরম্যাটে উত্তর দিন (claim ও reason বাংলায়):
{"assumptions":[{"claim":"...","status":"UNVALIDATED","reason":"..."}]}`,
      config: { responseMimeType: 'application/json', temperature: 0.2 },
    });

    let assumptions: { claim: string; status: string; reason: string }[] = [];
    try {
      const cleaned = (mapRes.text ?? '').replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(cleaned);
      assumptions = (parsed.assumptions ?? [])
        .filter((a: any) => a?.claim && VALID_STATUS.includes(a?.status))
        .map((a: any) => ({
          claim: String(a.claim),
          status: String(a.status),
          reason: String(a.reason ?? ''),
        }));
    } catch {
      assumptions = [];
    }

    return NextResponse.json({ skeptic, strategist, operator, assumptions });
  } catch (err) {
    console.error('War Room error:', err);
    return NextResponse.json(
      { error: 'এআই বিশ্লেষণ করতে সমস্যা হয়েছে। একটু পর আবার চেষ্টা করুন।' },
      { status: 500 }
    );
  }
}
