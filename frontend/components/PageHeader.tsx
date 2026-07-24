'use client';
import Link from 'next/link';

export default function PageHeader({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200">
      <Link 
        href="/" 
        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
      >
        ← পেছনে যান (Back)
      </Link>
      <h1 className="text-xl font-bold text-gray-800">{title}</h1>
      <div className="w-20"></div> {/* স্পেসিং ব্যালেন্সের জন্য */}
    </header>
  );
}
