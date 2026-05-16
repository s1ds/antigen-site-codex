"use client";

import { useState } from "react";

const matrix = {
  consulting: {
    q: "Quadrant 02",
    title: "Consulting Firms",
    sub: "Familiar Problem / Orphaned Capability",
    body: "When organisations lack capability for known challenges, they call firms with best practices and playbooks that deliver convergent solutions.",
    points: [
      "Pulls organisations toward industry norms.",
      "Reduces variance by design.",
      "Makes companies more like each other, not less.",
    ],
  },
  antigen: {
    q: "Quadrant 04",
    title: "ANTIGEN",
    sub: "Unfamiliar Problem / Orphaned Capability",
    body: "This is where organisations have no playbook, no clear owner, and genuine uncertainty. This is where ANTIGEN operates.",
    points: [
      "Hand-picked: specific expertise for specific problems.",
      "Bespoke: creating custom solutions, not frameworks.",
      "Divergent: differentiation that creates competitive separation.",
    ],
  },
  legacy: {
    q: "Quadrant 01",
    title: "Legacy OpCos",
    sub: "Familiar Problem / Owned Capability",
    body: "The domain of operational efficiency: campaign-oriented work that keeps the lights on but rarely transforms anything.",
    points: [
      "The comfort zone: precisely where growth goes to die.",
      "Optimising what is already known.",
      "Strategic breakthrough is rarely the focus.",
    ],
  },
  upskill: {
    q: "Quadrant 03",
    title: "In-House Upskill",
    sub: "New Problem / Owned Capability",
    body: "The aspirational response to new problems: building internal capability to handle shifts like AI or new channels.",
    points: [
      "Noble but slow impulse.",
      "By the time capability is built, the problem has mutated.",
      "Often creates innovation labs without enough sponsorship.",
    ],
  },
};

const quadrants = [
  ["consulting", "Consulting Firms", "Best practices & convergent solutions"],
  ["antigen", "ANTIGEN", "Bespoke, hand-picked, divergent"],
  ["legacy", "Legacy OpCos", "The comfort zone / BAU"],
  ["upskill", "In-House Upskill", "Aspirational labs & slow growth"],
];

export function WhatMatrix() {
  const [active, setActive] = useState("antigen");
  const detail = matrix[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.92fr]">
      <div className="relative pb-8 pl-8">
        <div className="absolute bottom-0 left-8 right-0 flex justify-between text-[0.58rem] font-black uppercase tracking-[0.1em] text-white/35">
          <span>Now Problems</span>
          <span>New / Next Problems</span>
        </div>
        <div className="absolute bottom-8 left-0 top-0 flex flex-col justify-between text-[0.58rem] font-black uppercase tracking-[0.1em] text-white/35">
          <span className="[writing-mode:vertical-rl] rotate-180">Orphaned Capability</span>
          <span className="[writing-mode:vertical-rl] rotate-180">Owned Capability</span>
        </div>
        <div className="relative grid aspect-square grid-cols-2 border border-white/15 bg-white/10">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-white/15" />
          <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-white/15" />
          {quadrants.map(([key, title, tag]) => {
            const isActive = active === key;
            const isAntigen = key === "antigen";

            return (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                onMouseEnter={() => setActive(key)}
                className={`relative flex flex-col justify-between border border-white/10 p-4 text-left transition ${
                  isActive
                    ? "bg-[var(--antigen-yellow)] text-black"
                    : isAntigen
                      ? "bg-[rgba(255,192,0,0.08)] text-white"
                      : "bg-white/[0.04] text-white/70 hover:bg-white/[0.09] hover:text-white"
                }`}
              >
                <span className="text-[0.58rem] font-black uppercase tracking-[0.1em] opacity-50">
                  {isAntigen ? "Q4 / Live" : "Strategic quadrant"}
                </span>
                <span>
                  <span className="font-display text-[clamp(1.5rem,2.4vw,2.5rem)] uppercase leading-none">
                    {title}
                  </span>
                  <span className="mt-2 block text-[0.62rem] font-black uppercase tracking-[0.07em] opacity-60">
                    {tag}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className={`border p-6 transition ${active === "antigen" ? "border-[var(--antigen-yellow)] bg-[rgba(255,192,0,0.05)]" : "border-white/15 bg-white/[0.04]"}`}>
        <p className="flex justify-between gap-4 text-[0.62rem] font-black uppercase tracking-[0.12em] text-white/35">
          Strategic position <span className="text-[var(--antigen-yellow)]">{detail.q}</span>
        </p>
        <h3 className={`mt-5 font-display text-[clamp(2.5rem,4vw,4rem)] uppercase leading-none ${active === "antigen" ? "text-[var(--antigen-yellow)]" : "text-white"}`}>
          {detail.title}
        </h3>
        <p className="mt-3 border-b border-white/10 pb-5 text-[0.68rem] font-black uppercase tracking-[0.1em] text-[var(--antigen-red)]">
          {detail.sub}
        </p>
        <p className="mt-5 text-sm font-semibold leading-relaxed text-white/65">{detail.body}</p>
        <div className="mt-6 space-y-3">
          {detail.points.map((point) => (
            <p key={point} className="border border-white/10 p-3 text-sm font-semibold leading-relaxed text-white/70">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--antigen-yellow)] align-middle" />
              {point}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
