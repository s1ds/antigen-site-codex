"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const cells = [
  {
    id: "commercial",
    label: "Commercial traction",
    center: "Partner context",
    experts: ["Growth craft", "MarTech craft"],
    agent: "Momentum monitor",
    outcome: "Non-obvious routes to revenue.",
  },
  {
    id: "position",
    label: "Category position",
    center: "Steward context",
    experts: ["Narrative craft", "Cultural craft"],
    agent: "Truth collider",
    outcome: "A position the market can repeat.",
  },
  {
    id: "model",
    label: "Operating model",
    center: "Operating context",
    experts: ["Systems craft", "Stakeholder proxy"],
    agent: "Model mutator",
    outcome: "A structure that removes latency.",
  },
];

const loop = [
  ["Divergence", "AI co-inspiration", "Expands the possibility space."],
  ["Iteration", "AI co-generation", "Produces high-fidelity variations instantly."],
  ["Convergence", "Human co-calibration", "Applies taste, truth and ethical judgment."],
];

export function HowProtocols() {
  const [activeCell, setActiveCell] = useState(cells[0].id);
  const [activeLoop, setActiveLoop] = useState(loop[0][0]);
  const selectedCell = useMemo(() => cells.find((cell) => cell.id === activeCell), [activeCell]);
  const selectedLoop = useMemo(() => loop.find(([title]) => title === activeLoop), [activeLoop]);

  return (
    <section className="bg-white px-page pb-0 pt-32 text-black md:pt-40">
      <section className="grid min-h-[28rem] items-center py-10 text-left md:min-h-[34rem]">
        <h1 className="max-w-6xl font-display text-[clamp(5rem,11vw,13rem)] uppercase leading-[0.78]">
          We structure
          <br />
          ourselves
          <br />
          <span className="text-[var(--antigen-red)]">around the growth problem</span>
        </h1>
      </section>

      <section className="grid gap-10 border-y border-black/10 py-16 lg:grid-cols-[0.75fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.12em] text-[var(--antigen-red)]">Operating principle</p>
          <h2 className="mt-3 font-display text-[clamp(4rem,8vw,8rem)] uppercase leading-[0.82]">A joint cognitive system</h2>
          <p className="mt-6 max-w-xl text-xl font-semibold leading-snug text-neutral-700 md:text-2xl">
            Artificial intelligence is not a tool for automation; it is a partner for <strong className="text-black">augmentation</strong>.
            The system relies on the precise interlocking of human judgment and machine scale.
          </p>
        </div>
        <VennSystem />
      </section>

      <section className="grid gap-10 py-16 lg:grid-cols-[0.75fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.12em] text-[var(--antigen-red)]">Deployment model</p>
          <h2 className="mt-3 max-w-xl font-display text-[clamp(4rem,8vw,8rem)] uppercase leading-[0.82]">Dynamic cells and headless operations.</h2>
          <p className="mt-6 max-w-xl text-xl font-semibold leading-snug text-neutral-600 md:text-2xl">
            Clients do not buy hours or retain an idle bench. They buy a calibrated intelligence sprint:
            a custom cell tailored to the problem, dissolved upon delivery.
          </p>
          <div className="mt-8 grid gap-3">
            {cells.map((cell) => (
              <button
                key={cell.id}
                type="button"
                onClick={() => setActiveCell(cell.id)}
                className={`border p-4 text-left transition ${
                  cell.id === activeCell ? "border-black bg-black text-white" : "border-black/15 bg-white hover:border-black hover:bg-[var(--antigen-paper)]"
                }`}
              >
                <span className="block text-sm font-black uppercase tracking-[0.08em]">{cell.label}</span>
                <span className={`mt-2 block text-sm font-bold ${cell.id === activeCell ? "text-white/65" : "text-neutral-500"}`}>{cell.outcome}</span>
              </button>
            ))}
          </div>
        </div>
        <CellDiagram cell={selectedCell} />
      </section>

      <section className="grid gap-10 border-t border-black/10 py-16 lg:grid-cols-[0.75fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.12em] text-[var(--antigen-red)]">Control loop</p>
          <h2 className="mt-3 font-display text-[clamp(4rem,8vw,8rem)] uppercase leading-[0.82]">The co-creative loop</h2>
          <p className="mt-6 max-w-xl text-xl font-semibold leading-snug md:text-2xl">
            Interaction between stacks is a continuous, interdependent cycle. Humans retain ultimate control and accountability
            for truth, transparency and justice.
          </p>
        </div>
        <LoopDiagram activeLoop={activeLoop} selectedLoop={selectedLoop} onSelect={setActiveLoop} />
      </section>

      <section className="border-t border-black/10 py-16">
        <p className="max-w-5xl text-2xl font-black leading-snug md:text-4xl">
          You do not build a team; you build a system of complementary power. Every engagement is assembled from precision-deployed
          nodes carrying new signals, opposing logic and lived reality.
        </p>
      </section>

      <div className="-mx-page flex flex-wrap items-center justify-between gap-6 bg-[var(--antigen-red)] px-page py-8 text-white">
        <p className="font-display text-[clamp(2.5rem,5vw,5rem)] uppercase leading-none">Bring the hard problem. We build the cell.</p>
        <Link href="/contact" className="bg-[var(--antigen-yellow)] px-8 py-4 text-xs font-black uppercase tracking-[0.12em] text-black hover:bg-white">
          Brief Antigen
        </Link>
      </div>
    </section>
  );
}

function VennSystem() {
  return (
    <div className="relative min-h-[28rem] overflow-hidden border border-black/15 bg-[var(--antigen-paper)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.045)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      <div className="absolute left-[8%] top-[18%] grid h-72 w-72 place-items-center rounded-full border-2 border-black bg-white p-10 text-center">
        <div>
          <p className="font-display text-5xl uppercase leading-none">The Human Stack</p>
          <p className="mt-4 text-sm font-black uppercase tracking-[0.08em] text-neutral-500">Curiosity, curation and connectivity</p>
        </div>
      </div>
      <div className="absolute right-[8%] top-[18%] grid h-72 w-72 place-items-center rounded-full border-2 border-[var(--antigen-red)] bg-white p-10 text-center">
        <div>
          <p className="font-display text-5xl uppercase leading-none text-[var(--antigen-red)]">The AI Stack</p>
          <p className="mt-4 text-sm font-black uppercase tracking-[0.08em] text-neutral-500">Synthesizer, provocateur, scaffolder, coordinator</p>
        </div>
      </div>
      <div className="absolute left-1/2 top-[33%] h-52 w-24 -translate-x-1/2 rounded-full bg-[var(--antigen-yellow)]/30 blur-sm" />
      <p className="absolute left-1/2 top-8 -translate-x-1/2 text-xs font-black uppercase tracking-[0.12em] text-neutral-500">Judgment Density</p>
      <p className="absolute left-1/2 top-12 -translate-x-1/2 font-display text-6xl text-[var(--antigen-red)]">↓</p>
    </div>
  );
}

function CellDiagram({ cell }) {
  return (
    <div className="relative min-h-[32rem] overflow-hidden border border-black/15 bg-[var(--antigen-paper)] p-6">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      <div className="relative mx-auto aspect-square max-w-[30rem]">
        <div className="absolute inset-[4%] rounded-full border border-dashed border-black/25" />
        <div className="absolute inset-[17%] rounded-full border border-black/20" />
        <div className="absolute inset-[30%] rounded-full border border-black/15" />
        <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center border border-black bg-black p-3 text-center text-sm font-black uppercase leading-tight text-white shadow-sm">
          {cell.center}
        </div>
        <DiagramNode label={cell.experts[0]} className="left-[13%] top-[22%]" />
        <DiagramNode label={cell.experts[1]} className="bottom-[18%] right-[14%]" />
        <DiagramNode label={cell.agent} className="right-0 top-1/2 bg-[var(--antigen-yellow)]" />
        <p className="absolute right-0 top-[18%] max-w-40 border-l-4 border-[var(--antigen-red)] pl-4 text-xs font-black uppercase leading-snug tracking-[0.04em] text-neutral-600">
          Cell forms for the problem. Dissolves upon delivery.
        </p>
      </div>
    </div>
  );
}

function LoopDiagram({ activeLoop, selectedLoop, onSelect }) {
  return (
    <div className="border border-black/15 bg-[var(--antigen-paper)] p-5">
      <div className="grid gap-3 md:grid-cols-3">
        {loop.map(([title, mode, text], index) => (
          <button
            key={title}
            type="button"
            onClick={() => onSelect(title)}
            className={`min-h-56 border p-5 text-left transition ${
              activeLoop === title ? "border-black bg-black text-white" : "border-black/15 bg-white text-black hover:border-black"
            }`}
          >
            <span className="font-display text-5xl uppercase leading-none">{title}</span>
            <span className={`mt-4 block text-xs font-black uppercase tracking-[0.08em] ${activeLoop === title ? "text-[var(--antigen-yellow)]" : "text-[var(--antigen-red)]"}`}>
              {mode}
            </span>
            <span className={`mt-5 block text-base font-black leading-snug ${activeLoop === title ? "text-white/75" : "text-neutral-800"}`}>{text}</span>
            <span className={`mt-8 block font-display text-6xl leading-none ${activeLoop === title ? "text-white/10" : "text-black/10"}`}>{`0${index + 1}`}</span>
          </button>
        ))}
      </div>
      <div className="mt-4 border border-black bg-white p-5">
        <p className="text-xs font-black uppercase tracking-[0.12em] text-neutral-500">Active loop state</p>
        <p className="mt-2 font-display text-6xl uppercase leading-none">{selectedLoop[0]}</p>
        <p className="mt-1 text-xs font-black uppercase tracking-[0.1em] text-[var(--antigen-red)]">{selectedLoop[1]}</p>
      </div>
    </div>
  );
}

function DiagramNode({ label, className }) {
  return (
    <div className={`absolute grid h-24 w-24 place-items-center rounded-full border border-black bg-white p-3 text-center text-xs font-black uppercase leading-tight shadow-sm ${className}`}>
      {label}
    </div>
  );
}
