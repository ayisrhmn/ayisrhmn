"use client";

import { useEffect, useState } from "react";

interface HeaderNavProps {
  links: { label: string; href: string }[];
}

// Section links that mark the section currently crossing the middle of the viewport.
export function HeaderNav({ links }: HeaderNavProps) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const { id } = entry.target;
          setActive((current) => {
            if (entry.isIntersecting) return id;
            return current === id ? null : current;
          });
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const link of links) {
      const section = document.getElementById(link.href.slice(1));
      if (section) observer.observe(section);
    }

    return () => observer.disconnect();
  }, [links]);

  return (
    <nav
      aria-label="Sections"
      className="hidden items-center font-mono text-[13px] text-muted-foreground sm:flex"
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          aria-current={active === link.href.slice(1) ? "location" : undefined}
          className="text-link px-3"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
