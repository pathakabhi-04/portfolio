"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { profile, routes } from "@/content/site";

const NAV = [
  { href: "/work", label: "Work", key: "work" },
  { href: "/about", label: "About", key: "about" },
  { href: "/blog", label: "Blog", key: "blog" },
  { href: "/contact", label: "Contact", key: "contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [lifted, setLifted] = useState(false);

  // Header gains a surface only once you leave the top. No border by default.
  useMotionValueEvent(scrollY, "change", (y) => setLifted(y > 24));

  const items = NAV.filter((item) => routes[item.key]);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        lifted ? "bg-bg/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-sm font-bold tracking-tight transition-colors hover:text-accent"
        >
          {profile.name || "Home"}
        </Link>

        <ul className="flex items-center gap-1">
          {items.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`relative block rounded-md px-3 py-1.5 text-sm transition-colors ${
                    active ? "text-fg" : "text-fg-muted hover:text-fg"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-md bg-bg-subtle"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
