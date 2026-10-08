import { Reveal } from "@/components/reveal";

export function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <header className="pt-20 pb-12">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.06}>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">{title}</h1>
      </Reveal>
      {lead && (
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted">{lead}</p>
        </Reveal>
      )}
    </header>
  );
}
