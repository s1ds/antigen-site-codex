import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-black bg-black px-page py-6 text-white">
      <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Link href="/" aria-label="ANTIGEN home" className="inline-flex">
            <Image src="/logos/antigen-logo-white.png" alt="ANTIGEN" width={1063} height={281} style={{ width: "142px", height: "auto" }} />
          </Link>
          <p className="mt-2 max-w-xl text-sm font-semibold text-white/70">
            Composable. Distributed. Insurgent.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs font-black uppercase tracking-wide">
          <Link href="/contact">Brief us</Link>
        </div>
      </div>
    </footer>
  );
}
