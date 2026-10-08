import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { profile, routes, socials } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}.`,
};

export default function ContactPage() {
  if (!routes.contact) notFound();

  const links = socials.filter((s) => s.url && !s.url.startsWith("mailto:"));

  return (
    <div className="mx-auto max-w-3xl px-6 pb-24">
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        lead="I'm open to ML and computer vision engineering roles, research collaborations and interesting problems. Email is the fastest way to reach me."
      />

      <Reveal>
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-baseline gap-3 font-display text-2xl font-semibold tracking-tight break-all sm:text-4xl"
        >
          <span className="bg-gradient-to-r from-accent to-accent bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
            {profile.email}
          </span>
          <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </Reveal>

      {links.length > 0 && (
        <Reveal delay={0.08}>
          <ul className="mt-16 divide-y divide-border border-y border-border">
            {links.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between py-5 transition-colors hover:text-accent"
                >
                  <span className="font-display text-lg">{s.name}</span>
                  <span className="font-mono text-xs text-fg-subtle transition-colors group-hover:text-accent">
                    {s.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")} ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      {profile.resumeUrl && (
        <Reveal delay={0.12}>
          <a
            href={profile.resumeUrl}
            className="mt-12 inline-block rounded-full border border-border px-6 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:border-accent hover:text-fg"
          >
            Download résumé
          </a>
        </Reveal>
      )}
    </div>
  );
}
