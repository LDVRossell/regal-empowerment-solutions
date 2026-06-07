import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A0030] via-[#2D0057] to-[#4C1D95] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-[#D4AF37] text-8xl font-black mb-4">404</div>
        <h1 className="text-white font-black text-3xl mb-3">Page Not Found</h1>
        <p className="text-[#C4B5FD] text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F0D060] hover:from-[#B8960C] hover:to-[#D4AF37] text-[#1A0030] font-black px-8 py-3 rounded-full transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
