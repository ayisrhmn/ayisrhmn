import Link from "next/link";
import { ThemeToggle } from "../ui/theme-toggle";

const NAV_LINKS = [
  { label: "about", href: "#about" },
  { label: "work", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 px-5 backdrop-blur-md sm:px-8">
      <div className="section-shell flex h-14 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-mono text-xs text-foreground transition-colors hover:text-highlight"
        >
          ~/ayisrhmn
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center font-mono text-xs text-subtle-foreground sm:flex">
            {NAV_LINKS.map((link, index) => (
              <span key={link.href} className="flex items-center">
                {index > 0 && (
                  <span className="px-2" aria-hidden="true">
                    ·
                  </span>
                )}
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </span>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
