'use client';
import PageHeader from '@/components/PageHeader';
import AdSlot from '@/components/AdSlot';

export default function BusinessGuidePage() {
  return (
    <main className="min-h-screen bg-[#f0fdf4] p-4 md:p-8 max-w-3xl mx-auto font-sans">
      <PageHeader title="📘 বিজনেস গাইড" />

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 mb-6 text-center">
        <div className="text-4xl mb-3">💡</div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">আপনার স্টার্টআপ আইডিয়া এনালাইসিস করুন</h2>
        <p className="text-gray-600 text-sm mb-6">
          আমাদের AI ওয়ার রুম আপনার আইডিয়ার ঝুঁকি, প্রয়োজনীয় পদক্ষেপ এবং পরিকল্পনা বাংলায় সাজিয়ে দেবে।
        </p>

        <button className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md">
          🚀 নতুন বিজনেস এনালাইসিস শুরু করুন
        </button>
      </div>

      {/* Ad Slot #2 */}
      <AdSlot label="বিজ্ঞাপন - বিজনেস গাইড স্পেস" />
    </main>
  );
}
