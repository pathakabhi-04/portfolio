import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-6">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        This page doesn&rsquo;t exist.
      </h1>
      <Link href="/" className="mt-8 text-fg-muted transition-colors hover:text-accent">
        ← Back home
      </Link>
    </div>
  );
}
