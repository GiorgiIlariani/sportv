// components/RunningText.js
export default function RunningText({ text }: { text: string }) {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-100 border border-gray-300 py-2 relative">
      <div className="animate-marquee inline-block">
        <p className="text-lg font-semibold text-gray-800">{text}</p>
      </div>
    </div>
  );
}
