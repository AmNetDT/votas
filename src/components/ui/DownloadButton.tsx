"use client";

import { useState } from "react";

type Props = {
  fileUrl: string;
  fileName?: string;
};

export default function DownloadButton({
  fileUrl,
  fileName = "votas-brochure.pdf",
}: Props) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      // For files in /public, direct link is fastest
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setTimeout(() => setDownloading(false), 1000);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={downloading}
      className="group relative inline-flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-7 py-3.5 rounded-full font-medium text-sm sm:text-[15px] shadow-lg shadow-black/10 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70"
    >
      <span className="w-8 h-8 rounded-full bg-white/15 dark:bg-black/10 flex items-center justify-center group-hover:rotate-12 transition-transform">
        {downloading ? (
          <span className="w-4 h-4 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin" />
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        )}
      </span>
      {downloading ? "Downloading..." : "Download Brochure (PDF)"}
    </button>
  );
}
