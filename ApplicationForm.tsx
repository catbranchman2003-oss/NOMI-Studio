import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-deep-fern border-t border-fern/10 py-14 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-mint/30 text-xs tracking-[0.2em] uppercase font-sans">
          N O M I &nbsp; S T U D I O
        </p>
        <p className="text-mint/20 text-xs font-sans font-light">
          Creator Monetisation & Audience Psychology
        </p>
        <Link
          href="/apply"
          className="text-blush/50 text-xs tracking-[0.15em] uppercase font-sans hover:text-blush/80 transition-colors duration-300"
        >
          Apply →
        </Link>
      </div>
    </footer>
  );
}
