import Link from 'next/link';
import AdSlot from '@/components/AdSlot';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f0fdf4] p-4 md:p-8 font-sans max-w-4xl mx-auto">
      {/* App Title */}
      <div className="text-center my-8">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-2">Uddyog-CoPilot</h1>
        <p className="text-gray-600 text-lg">আপনার স্টার্টআপ ও ব্যবসার নির্ভরযোগ্য এআই সহকারী</p>
      </div>

      {/* Main 2 Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        {/* Option 1: Business Guide */}
        <Link href="/business-guide" className="block group">
          <div className="h-full p-8 bg-white border-2 border-blue-500 rounded-2xl shadow-sm group-hover:shadow-md transition-all text-center flex flex-col justify-center items-center">
            <div className="text-5xl mb-4">📘</div>
            <h2 className="text-2xl font-bold text-blue-600 mb-2">বিজনেস গাইড</h2>
            <p className="text-gray-600 text-sm">
              বিজনেস আইডিয়া বিশ্লেষণ, ঝুঁকি যাচাই এবং এআই গাইডলাইন পান।
            </p>
          </div>
        </Link>

        {/* Option 2: To-Do List */}
        <Link href="/todo" className="block group">
          <div className="h-full p-8 bg-white border-2 border-emerald-400 rounded-2xl shadow-sm group-hover:shadow-md transition-all text-center flex flex-col justify-center items-center">
            <div className="text-5xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-emerald-600 mb-2">টু-ডু লিস্ট</h2>
            <p className="text-gray-600 text-sm">
              আপনার ব্যবসার প্রতিদিনের কাজ ও পরিকল্পনাগুলো সাজিয়ে রাখুন।
            </p>
          </div>
        </Link>
      </div>

      {/* Ad Slot #1 */}
      <AdSlot label="স্পন্সরড বিজ্ঞাপন" />
    </main>
  );
}
