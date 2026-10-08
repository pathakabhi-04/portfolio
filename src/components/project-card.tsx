import Link from "next/link";
import type { Project } from "@/content/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex h-full flex-col rounded-xl border border-border bg-bg-elevated/50 p-6 transition-colors duration-200 hover:border-accent/50"
    >
      <div className="flex items-center justify-between font-mono text-xs text-fg-subtle">
        <span>{project.year}</span>
        {project.hasCaseStudy && <span className="text-accent">Case study</span>}
      </div>
      <h3 className="mt-3 font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">{project.summary}</p>
      {project.tech.length > 0 && (
        <p className="mt-5 font-mono text-xs leading-relaxed text-fg-subtle">
          {project.tech.join(" · ")}
        </p>
      )}
    </Link>
  );
}
