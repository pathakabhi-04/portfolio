import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { projects, routes } from "@/content/site";

// Only the slugs in site.ts exist. Anything else is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function findProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project || !routes.work) notFound();

  const CaseStudy = project.hasCaseStudy
    ? (await import(`@/content/work/${project.slug}.mdx`)).default
    : null;

  const links = [
    project.liveUrl && { label: "Live demo", href: project.liveUrl, primary: true },
    project.repoUrl && { label: "Source code", href: project.repoUrl, primary: !project.liveUrl },
  ].filter(Boolean) as { label: string; href: string; primary: boolean }[];

  return (
    <article className="mx-auto max-w-3xl px-6 pb-24">
      <header className="pt-16 pb-10">
        <Reveal>
          <Link
            href="/work"
            className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle transition-colors hover:text-accent"
          >
            ← All work
          </Link>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl">
            {project.title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg leading-relaxed text-fg-muted">{project.summary}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <dl className="mt-8 grid gap-6 border-y border-border py-6 text-sm sm:grid-cols-[auto_1fr]">
            {project.year && (
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-fg-subtle">Year</dt>
                <dd className="mt-1 text-fg">{project.year}</dd>
              </div>
            )}
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-fg-subtle">Stack</dt>
              <dd className="mt-1 text-fg">{project.tech.join(" · ")}</dd>
            </div>
          </dl>
        </Reveal>
        {links.length > 0 && (
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    l.primary
                      ? "rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-fg transition-transform duration-200 hover:scale-[1.03]"
                      : "rounded-full border border-border px-5 py-2 text-sm font-medium text-fg-muted transition-colors hover:border-accent hover:text-fg"
                  }
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </Reveal>
        )}
      </header>

      {CaseStudy ? (
        <Reveal delay={0.1}>
          <div className="pt-4">
            <CaseStudy />
          </div>
        </Reveal>
      ) : (
        <p className="text-fg-subtle">A full write-up for this project is coming soon.</p>
      )}
    </article>
  );
}
