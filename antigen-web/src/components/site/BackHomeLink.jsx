import Link from "next/link";

const toneClasses = {
  light: "border-black/20 text-black hover:border-black hover:bg-black hover:text-white focus-visible:ring-black/30",
  dark: "border-white/25 text-white hover:border-white hover:bg-white hover:text-black focus-visible:ring-white/35",
  red: "border-white/35 text-white hover:border-white hover:bg-white hover:text-[var(--antigen-red)] focus-visible:ring-white/40",
};

export function BackHomeLink({ tone = "light", className = "" }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 border px-4 py-2 text-xs font-black uppercase tracking-[0.1em] transition focus:outline-none focus-visible:ring-4 ${toneClasses[tone]} ${className}`}
    >
      <span aria-hidden="true">←</span>
      Back to homepage
    </Link>
  );
}
