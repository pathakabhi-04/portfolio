/** Shapes for everything in site.ts. Edit site.ts, not this file. */

export type Social = {
  name: string;
  url: string;
  /** Show in the compact header/footer row, not just the contact page. */
  primary?: boolean;
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export type Project = {
  /** URL segment: /work/<slug>. Must match the .mdx filename for case studies. */
  slug: string;
  title: string;
  /** One or two sentences, shown on the card. */
  summary: string;
  tech: string[];
  /** Leave out if unknown. */
  year?: number;
  cover?: string;
  liveUrl?: string;
  repoUrl?: string;
  /** Surfaces on the home page. */
  featured?: boolean;
  /** True when a matching .mdx case study exists in src/content/work. */
  hasCaseStudy?: boolean;
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  summary?: string;
  highlights: string[];
};

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
  note?: string;
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  avatar?: string;
  resumeUrl?: string;
  /** One string per paragraph on the about page. */
  about: string[];
};

export type Routes = {
  work: boolean;
  about: boolean;
  blog: boolean;
  contact: boolean;
};

export type SiteMeta = {
  /** Full origin, no trailing slash. Used for canonical URLs and previews. */
  baseUrl: string;
  title: string;
  description: string;
  locale: string;
};
