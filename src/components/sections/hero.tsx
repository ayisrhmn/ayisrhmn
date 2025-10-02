import { Button } from "@/components/ui/button";
import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { ThemeToggle } from "../base/theme-toggle";
import { Badge } from "../ui/badge";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="fixed top-2 left-2 z-50">
        <Badge variant="default">Still under development. Data shown is dummy 😅</Badge>
      </div>
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Sr. Frontend Engineer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-pretty">
            I build accessible, pixel-perfect, and performant digital experiences for the web.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          <div className="flex gap-4 pt-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubLogoIcon className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinLogoIcon className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <InstagramLogoIcon className="w-6 h-6" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <EnvelopeSimpleIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
