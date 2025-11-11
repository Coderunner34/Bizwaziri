import { Play } from "lucide-react";

export function VideoUnavailableNotice() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 bg-gradient-to-r from-[#FFF6F0] via-white to-[#FFF6F0] text-center rounded-2xl shadow-sm border border-orange-100">
      <div className="flex items-center gap-3 text-gray-700 mb-3">
        <Play className="w-6 h-6 text-[#F57C00]" />
        <span className="text-lg font-medium">
          Full video testimonials unavailable
        </span>
      </div>

      <p className="text-gray-500 mb-6">
        Follow us on our platforms to view real transformation stories.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://www.instagram.com/bizwaziri" // replace with your real links
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F57C00] hover:bg-[#E66C00] text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all hover:shadow-lg"
        >
          Follow on Instagram
        </a>
        <a
          href="https://www.youtube.com/@bizwaziri" // replace with your real links
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-[#F57C00] text-[#F57C00] hover:bg-[#FFF3E6] px-6 py-3 rounded-lg font-semibold shadow-sm transition-all"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}
