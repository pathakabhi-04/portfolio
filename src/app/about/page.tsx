import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import {
  achievements,
  education,
  experience,
  profile,
  routes,
  socials,
  visibleSkills,
} from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: profile.tagline,
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-sm font-medium uppercase tracking-[0.16em] text-fg-subtle">
      {children}
    </h2>
  );
}

export default function AboutPage() {
  if (!routes.about) notFound();

  const skills = visibleSkills();
  const links = socials.filter((s) => s.url);

  return (
    <div className="mx-auto max-w-3xl px-6 pb-24">
      <PageHeader eyebrow="About" title={profile.name} lead={profile.role} />

      <section className="space-y-5">
        {profile.about.map((para, i) => (
          <Reveal key={i} delay={i * 0.04}>
            <p className="text-lg leading-relaxed text-fg-muted">{para}</p>
          </Reveal>
        ))}
        {links.length > 0 && (
          <Reveal>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-sm">
              {links.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-fg transition-colors hover:text-accent"
                  >
                    {s.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </section>

      {skills.length > 0 && (
        <section className="mt-20">
          <Reveal>
            <SectionTitle>Skills</SectionTitle>
          </Reveal>
          <div className="mt-8 space-y-8">
            {skills.map((g) => (
              <Reveal key={g.group}>
                <h3 className="font-display text-base font-semibold text-fg">{g.group}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-bg-elevated/60 px-3 py-1 text-sm text-fg-muted transition-colors hover:border-accent/50 hover:text-fg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {experience.length > 0 && (
        <section className="mt-20">
          <Reveal>
            <SectionTitle>Experience</SectionTitle>
          </Reveal>
          <ol className="mt-8 space-y-10">
            {experience.map((e) => (
              <Reveal key={`${e.company}-${e.start}`}>
                <li>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">
                      {e.role} <span className="text-fg-subtle">· {e.company}</span>
                    </h3>
                    <p className="font-mono text-xs text-fg-subtle">
                      {e.start} – {e.end}
                    </p>
                  </div>
                  {e.summary && <p className="mt-2 text-fg-muted">{e.summary}</p>}
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-fg-muted marker:text-accent">
                    {e.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>
      )}

      {education.length > 0 && (
        <section className="mt-20">
          <Reveal>
            <SectionTitle>Education</SectionTitle>
          </Reveal>
          <Reveal>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[32rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-border font-mono text-xs uppercase tracking-wider text-fg-subtle">
                    <th className="py-2 pr-4 font-normal">Qualification</th>
                    <th className="py-2 pr-4 font-normal">Institution / Board</th>
                    <th className="py-2 pr-4 font-normal">Year</th>
                    <th className="py-2 text-right font-normal">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {education.map((ed) => (
                    <tr key={`${ed.degree}-${ed.end}`} className="border-b border-border/60">
                      <td className="py-3 pr-4 font-medium text-fg">{ed.degree}</td>
                      <td className="py-3 pr-4 text-fg-muted">{ed.school}</td>
                      <td className="py-3 pr-4 font-mono text-xs text-fg-subtle">
                        {ed.start ? `${ed.start} – ${ed.end}` : ed.end}
                      </td>
                      <td className="py-3 text-right text-fg">{ed.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>
      )}

      {achievements.length > 0 && (
        <section className="mt-20">
          <Reveal>
            <SectionTitle>Achievements</SectionTitle>
          </Reveal>
          <ul className="mt-8 list-disc space-y-2 pl-5 font-semibold text-fg marker:text-accent">
            {achievements.map((a) => (
              <Reveal key={a}>
                <li>{a}</li>
              </Reveal>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
