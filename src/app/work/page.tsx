import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects, routes } from "@/content/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Computer vision, retrieval and evaluation projects.",
};

export default function WorkPage() {
  if (!routes.work) notFound();

  return (
    <div className="mx-auto max-w-5xl px-6 pb-24">
      <PageHeader
        eyebrow="Work"
        title="Selected projects"
        lead="Systems I've designed, built and evaluated end to end. Projects marked as case studies include the problem, the hard parts and the results."
      />
      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <li key={project.slug}>
            <Reveal delay={Math.min(i, 4) * 0.05} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
