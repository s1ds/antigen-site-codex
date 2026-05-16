import Link from "next/link";

export function Button({ href, children, variant = "dark" }) {
  const className =
    variant === "light"
      ? "inline-flex border-2 border-white px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
      : "inline-flex border-2 border-black px-5 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-black hover:text-white";

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
