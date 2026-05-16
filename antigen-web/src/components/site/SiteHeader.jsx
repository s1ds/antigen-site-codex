import Image from "next/image";
import Link from "next/link";

const nav = [
  ["Why", "/why"],
  ["What", "/what"],
  ["Who", "/who"],
  ["How", "/how"],
  ["POV", "/pov"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex min-h-20 items-center justify-between bg-black/90 px-page py-5 backdrop-blur-sm">
      <Link href="/" aria-label="ANTIGEN home">
        <Image src="/logos/antigen-logo-white.png" alt="ANTIGEN" width={142} height={32} priority />
      </Link>
      <nav className="hidden items-center gap-5 text-xs font-black uppercase tracking-wide text-white md:flex">
        {nav.map(([label, href]) => (
          <Link key={href} href={href} className="hover:text-[var(--antigen-yellow)]">
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
