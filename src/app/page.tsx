import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { featuredProjects, profile, routes } from "@/content/site";

export default function Home() {
  const featured = featuredProjects();

  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="flex min-h-[72vh] flex-col justify-center py-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {profile.role || "Add your role in src/content/site.ts"}
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            {profile.tagline || "Add your tagline in src/content/site.ts"}
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {routes.work && (
              <Link
                href="/work"
                className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-accent-fg transition-transform duration-200 hover:scale-[1.03]"
              >
                View work
              </Link>
            )}
            {routes.contact && (
              <Link
                href="/contact"
                className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:border-accent hover:text-fg"
              >
                Get in touch
              </Link>
            )}
          </div>
        </Reveal>
      </section>

      {featured.length > 0 && (
        <section className="border-t border-border py-20">
          <Reveal>
            <h2 className="font-display text-sm font-medium uppercase tracking-[0.16em] text-fg-subtle">
              Selected work
            </h2>
          </Reveal>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {featured.map((project, i) => (
              <li key={project.slug}>
                <Reveal delay={i * 0.06} className="h-full">
                  <ProjectCard project={project} />
                </Reveal>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
