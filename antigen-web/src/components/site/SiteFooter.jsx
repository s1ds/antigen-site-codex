import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-black bg-black px-page py-10 text-white">
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-display text-6xl uppercase leading-none">ANTIGEN</p>
          <p className="mt-3 max-w-xl text-sm font-semibold text-white/70">
            Composable. Distributed. Insurgent.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs font-black uppercase tracking-wide">
          <Link href="/contact">Brief us</Link>
          <Link href="/studio">Studio</Link>
        </div>
      </div>
    </footer>
  );
}
