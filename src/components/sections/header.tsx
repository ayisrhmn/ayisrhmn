import { Logo } from "../ui/logo";
import { ThemeToggle } from "../ui/theme-toggle";
import { HeaderNav } from "./header-nav";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="shell flex min-h-16 items-center justify-between gap-6">
        <a
          href="#top"
          aria-label="Muhammad Fariz Rahman, back to top"
          className="flex min-h-11 items-center"
        >
          <Logo className="size-[30px]" />
        </a>
        <div className="flex items-center gap-1">
          <HeaderNav links={NAV_LINKS} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
