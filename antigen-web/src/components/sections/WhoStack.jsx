"use client";

import { useMemo, useState } from "react";
import { BackHomeLink } from "@/components/site/BackHomeLink";

const humanRoles = [
  {
    id: "partners",
    label: "Partners",
    alias: "The Stewards",
    line: "Own the client relationship and context.",
    focus: "Prospective sensemaking",
    description: "System architects who bring leverage through founding, market, domain, country and technology context.",
    subtypes: ["Founding", "Equity", "Domain", "Country", "System"],
    proof: "Frame the problem, hold the context, bear reputational risk.",
  },
  {
    id: "experts",
    label: "Experts",
    alias: "The Deep Nodes",
    line: "Plug in for high-impact expertise, not billable hours.",
    focus: "Solution design",
    description: "Solution designers: strategic, cultural, technical and executional masters assembled for the problem.",
    subtypes: ["Strategic", "Provocateur", "Cultural and behavioral", "Systems and technology", "Executional"],
    proof: "MarTech, growth, commercial, product and narrative specialists designing non-obvious solutions.",
  },
  {
    id: "associates",
    label: "Associates",
    alias: "Apprentice-Explorers",
    line: "Emerging talent supported by the AI stack to perform above level.",
    focus: "Internal resistance",
    description: "Internal resistance that scouts signal, stress-tests assumptions and carries outside reality into the room.",
    subtypes: ["Signal scout", "Stress tester", "The outsider", "Stakeholder proxy", "Consumer agent"],
    proof: "Curated perspectives force diverse signals into the room.",
  },
];

const aiRoles = [
  {
    id: "synthesizer",
    label: "The Synthesizer",
    alias: "Memory",
    line: "Knows everything.",
    focus: "Institutional memory",
    description: "Identifies patterns, monitors momentum and keeps collective memory available to every node.",
    subtypes: ["Entropy scanner", "Truth collider", "Pattern library", "Momentum monitor"],
    proof: "A knowledge graph that remembers every insight, decision and signal.",
  },
  {
    id: "provocateur",
    label: "The Provocateur",
    alias: "Dissent",
    line: "Questions everything.",
    focus: "Structured dissent",
    description: "Specialized agents that challenge consensus, expose blind spots and test the market reality.",
    subtypes: ["Insurgent questions", "Consensus forensic agents", "Category heretics", "Market reality checks"],
    proof: "Challenges consensus, identifies blind spots and simulates counterfactual futures.",
  },
  {
    id: "scaffolder",
    label: "The Scaffolding",
    alias: "Structure",
    line: "Structures everything.",
    focus: "Structured creativity",
    description: "Functional frameworks that turn divergent intelligence into rigorous, jury-ready strategy.",
    subtypes: ["Divergence blueprint", "Growth brief lock", "Big idea stress-tester", "Operating model mutator"],
    proof: "Specialized interfaces guide outputs toward rigorous strategy.",
  },
];

export function WhoStack() {
  const [activeHuman, setActiveHuman] = useState(humanRoles[0].id);
  const [activeAi, setActiveAi] = useState(aiRoles[1].id);
  const [activeDiagramNode, setActiveDiagramNode] = useState(humanRoles[0].id);

  const allRoles = useMemo(() => [...humanRoles, ...aiRoles], []);
  const selectedDiagramRole = useMemo(() => allRoles.find((role) => role.id === activeDiagramNode), [activeDiagramNode, allRoles]);

  function selectHuman(id) {
    setActiveHuman(id);
    setActiveDiagramNode(id);
  }

  function selectAi(id) {
    setActiveAi(id);
    setActiveDiagramNode(id);
  }

  return (
    <section className="min-h-screen bg-white px-page pb-20 pt-32 text-black md:pt-40">
      <BackHomeLink className="mb-10" />
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <h1 className="font-display text-[clamp(4.75rem,11vw,12rem)] uppercase leading-[0.78]">
            Who
            <br />
            <span className="text-[var(--antigen-red)]">builds?</span>
          </h1>
        </div>
        <div className="max-w-2xl border-l-4 border-black pl-5">
          <p className="text-2xl font-black leading-tight md:text-4xl">
            We do not have employees. We have sovereign contributors.
          </p>
          <div className="mt-7 grid gap-5 border border-black/15 bg-[var(--antigen-paper)] p-5 md:grid-cols-[1fr_0.9fr] md:items-center">
            <div>
              <h2 className="font-display text-5xl uppercase leading-none">Architecture overview</h2>
              <p className="mt-3 text-sm font-bold leading-relaxed text-neutral-600">
                Intelligence is split into two concurrent systems. Every engagement assembles pure signal from human nodes
                and structured friction from autonomous AI architectures.
              </p>
            </div>
            <ArchitectureLoop />
          </div>
          <p className="mt-5 max-w-xl text-sm font-bold uppercase tracking-[0.08em] text-neutral-500">
            Click a node. See who enters the problem space.
          </p>
        </div>
      </div>

      <div className="mt-14">
        <StackDiagram
          activeId={activeDiagramNode}
          onSelectHuman={selectHuman}
          onSelectAi={selectAi}
          selectedRole={selectedDiagramRole}
        />
      </div>
      <BackHomeLink className="mt-16" />
    </section>
  );
}

function ArchitectureLoop() {
  return (
    <div className="relative mx-auto grid w-full max-w-64 gap-3 py-2">
      <div className="absolute left-1/2 top-5 h-[calc(100%-2.5rem)] w-[70%] -translate-x-1/2 rounded-full border border-black/20" />
      <StackCard title="The Human Stack" subtitle="Signal and leverage" icon="nodes" />
      <StackCard title="The AI Stack" subtitle="Memory and dissent" icon="chip" />
      <div className="absolute -right-1 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-[var(--antigen-yellow)] text-xs font-black text-black">
        x
      </div>
    </div>
  );
}

function StackCard({ title, subtitle, icon }) {
  return (
    <div className="relative z-10 border border-black/15 bg-white p-4 shadow-sm">
      <div className="mb-3 h-8 w-8 text-[var(--antigen-red)]">
        {icon === "nodes" ? (
          <svg viewBox="0 0 48 48" aria-hidden="true" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="4">
            <circle cx="14" cy="24" r="5" />
            <circle cx="34" cy="13" r="5" />
            <circle cx="34" cy="35" r="5" />
            <path d="M18.5 21.5 29.5 15.5M18.5 26.5 29.5 33" />
          </svg>
        ) : (
          <svg viewBox="0 0 48 48" aria-hidden="true" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="4">
            <rect x="13" y="13" width="22" height="22" rx="3" />
            <path d="M19 25h7m0 0v-6m0 6 5 5M9 18h4M9 30h4M35 18h4M35 30h4M18 9v4M30 9v4M18 35v4M30 35v4" />
          </svg>
        )}
      </div>
      <p className="text-sm font-black uppercase tracking-[0.05em]">{title}</p>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.07em] text-neutral-500">{subtitle}</p>
    </div>
  );
}

function StackDiagram({ activeId, onSelectHuman, onSelectAi, selectedRole }) {
  const nodes = [
    { role: humanRoles[0], kind: "human", className: "left-[4%] top-[27%]" },
    { role: humanRoles[1], kind: "human", className: "left-[20%] top-[3%]" },
    { role: humanRoles[2], kind: "human", className: "left-[16%] bottom-[11%]" },
    { role: aiRoles[0], kind: "ai", className: "right-[20%] top-[3%]" },
    { role: aiRoles[1], kind: "ai", className: "right-[4%] top-[27%]" },
    { role: aiRoles[2], kind: "ai", className: "right-[16%] bottom-[11%]" },
  ];

  return (
    <div className="order-first border border-black/15 bg-[var(--antigen-paper)] p-5 xl:order-none">
      <div className="grid gap-5">
        <div className="relative mx-auto aspect-square w-full max-w-[28rem]">
          <div className="absolute inset-[3%] rounded-full border border-black/20" />
          <div className="absolute inset-[15%] rounded-full border border-dashed border-black/30" />
          <div className="absolute inset-[30%] rounded-full border border-black/20" />
          <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-black p-4 text-center text-sm font-black uppercase leading-tight text-white shadow-xl">
            The problem space
          </div>
          <div className="absolute left-[10%] top-1/2 h-px w-[80%] -translate-y-1/2 bg-black/10" />
          <div className="absolute left-1/2 top-[10%] h-[80%] w-px -translate-x-1/2 bg-black/10" />

          {nodes.map(({ role, kind, className }) => (
            <NodeButton
              key={role.id}
              role={role}
              className={className}
              active={role.id === activeId}
              kind={kind}
              onClick={() => (kind === "human" ? onSelectHuman(role.id) : onSelectAi(role.id))}
            />
          ))}
        </div>

        <div className="border border-black/15 bg-white p-4">
          <p className="text-xs font-black uppercase tracking-[0.12em] text-neutral-500">Selected node</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
            <h3 className="font-display text-5xl uppercase leading-none">{selectedRole.label}</h3>
            <p className="text-xs font-black uppercase tracking-[0.08em] text-[var(--antigen-red)]">{selectedRole.focus}</p>
          </div>
          <p className="mt-3 text-sm font-bold leading-relaxed text-neutral-600">{selectedRole.description}</p>
          <p className="mt-4 text-xs font-black uppercase tracking-[0.12em] text-neutral-500">
            {humanRoles.some((role) => role.id === selectedRole.id) ? "Persona" : "Antigen AI tool"}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedRole.subtypes.map((subtype) => (
              <span key={subtype} className="border border-black/15 bg-[var(--antigen-paper)] px-2.5 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.06em]">
                {subtype}
              </span>
            ))}
          </div>
        </div>

        <p className="text-center text-xs font-black uppercase tracking-[0.1em] text-neutral-500">
          Human judgment x machine scale = judgment density
        </p>
      </div>
    </div>
  );
}

function NodeButton({ role, className, active = false, kind, onClick }) {
  const nodeLabel = role.label.replace("The ", "The\n");

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`absolute grid h-[4.75rem] w-[4.75rem] place-items-center rounded-full border p-2 text-center text-[0.5rem] font-black uppercase leading-[1.02] transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[rgba(255,192,0,0.45)] sm:h-24 sm:w-24 sm:text-[0.56rem] ${
        active
          ? "border-black bg-[var(--antigen-yellow)] text-black shadow-lg"
          : kind === "human"
            ? "border-black bg-black text-white hover:bg-neutral-800"
            : "border-[var(--antigen-red)] bg-white text-[var(--antigen-red)] hover:bg-[var(--antigen-red)] hover:text-white"
      } ${className}`}
    >
      <span className="max-w-[4.2rem] whitespace-pre-line break-words sm:max-w-[4.8rem]">{nodeLabel}</span>
    </button>
  );
}
