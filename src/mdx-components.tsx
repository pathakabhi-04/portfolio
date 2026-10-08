import type { MDXComponents } from "mdx/types";

// Styles for every case study. Headings, lists and tables follow the site tokens.
const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-14 mb-4 font-display text-2xl font-semibold tracking-tight text-fg first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 mb-3 font-display text-lg font-semibold text-fg" {...props} />
  ),
  p: (props) => <p className="my-4 leading-relaxed text-fg-muted" {...props} />,
  ul: (props) => (
    <ul className="my-4 list-disc space-y-2 pl-5 text-fg-muted marker:text-accent" {...props} />
  ),
  ol: (props) => (
    <ol className="my-4 list-decimal space-y-2 pl-5 text-fg-muted marker:text-accent" {...props} />
  ),
  li: (props) => <li className="leading-relaxed pl-1" {...props} />,
  strong: (props) => <strong className="font-semibold text-fg" {...props} />,
  a: (props) => (
    <a
      className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-bg-subtle px-1.5 py-0.5 font-mono text-[0.85em] text-fg"
      {...props}
    />
  ),
  table: (props) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-left text-sm" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border-b border-border bg-bg-elevated px-4 py-2.5 font-medium text-fg"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border-b border-border px-4 py-2.5 font-mono text-fg-muted" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
