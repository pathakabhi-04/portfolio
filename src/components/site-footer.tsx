import { primarySocials, profile } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const links = primarySocials();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 text-sm text-fg-subtle sm:flex-row sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        {links.length > 0 && (
          <ul className="flex items-center gap-5">
            {links.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
