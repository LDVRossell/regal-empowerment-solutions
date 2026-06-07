"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A0030] via-[#2D0057] to-[#4C1D95] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-[#D4AF37] text-8xl font-black mb-4">500</div>
        <h1 className="text-white font-black text-3xl mb-3">Something went wrong</h1>
        <p className="text-[#C4B5FD] text-lg mb-8">
          We&apos;re sorry — an unexpected error occurred.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-gradient-to-r from-[#D4AF37] to-[#F0D060] hover:from-[#B8960C] hover:to-[#D4AF37] text-[#1A0030] font-black px-8 py-3 rounded-full transition-all"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border-2 border-white/50 text-white hover:bg-white/10 font-bold px-8 py-3 rounded-full transition-all"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
