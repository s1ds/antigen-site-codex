import Link from "next/link";

export function Hero({ eyebrow, title, body }) {
  return (
    <section className="min-h-screen bg-antigen-red px-page pb-24 pt-32 text-white md:pb-12 md:pt-36">
      <div className="flex min-h-[calc(100vh-11rem)] flex-col justify-end gap-8 md:min-h-[calc(100vh-10rem)] md:gap-12">
        <h1 className="max-w-7xl text-[clamp(1.78rem,4.15vw,5.25rem)] font-extrabold leading-[0.95]">
          We are a{" "}
          <Link className="home-link home-link--yellow" href="/what">
            post algorithm organism
          </Link>
          , built to tackle{" "}
          <Link className="home-link home-link--cyan" href="/why">
            stagnation and sameness
          </Link>{" "}
          by bringing together a{" "}
          <Link className="home-link home-link--white" href="/how">
            purpose-built configuration
          </Link>{" "}
          of{" "}
          <Link className="home-link home-link--gold" href="/who">
            minds and machines
          </Link>
          . We are looking for{" "}
          <Link className="home-link home-link--paper" href="/contact">
            hard problems
          </Link>
          .{" "}
          <Link className="home-link home-link--magenta-light" href="/contact">
            Talk to us
          </Link>{" "}
          if you have one or want to help solve some.
        </h1>
        <p className="max-w-[18ch] font-display text-[clamp(1.8rem,5vw,5rem)] uppercase leading-[0.82] text-[var(--antigen-yellow)] md:max-w-[20ch]">
          {title}
        </p>
      </div>
    </section>
  );
}
