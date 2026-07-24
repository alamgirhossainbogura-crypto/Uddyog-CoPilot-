export default function AdSlot({ label = "বিজ্ঞাপন" }: { label?: string }) {
  return (
    <div className="w-full my-6 p-4 border-2 border-dashed border-emerald-300 bg-emerald-50/50 rounded-xl flex flex-col items-center justify-center text-center min-h-[120px]">
      <span className="text-xs font-semibold uppercase text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded mb-2">
        {label}
      </span>
      <p className="text-sm text-gray-500">Ad Banner Placement Space</p>
    </div>
  );
}
