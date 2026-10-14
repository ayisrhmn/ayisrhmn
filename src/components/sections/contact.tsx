import { Button } from "@/components/ui/button";
import { SOCIAL_MEDIAS } from "@/lib/constants";
import { ChatIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../ui/reveal";
import { Spotlight } from "../ui/spotlight";

export function Contact() {
  const email = SOCIAL_MEDIAS?.find((v) => v?.name === "Email");
  const linkedIn = SOCIAL_MEDIAS?.find((v) => v?.name === "LinkedIn");

  return (
    <section id="contact" className="section">
      <Reveal className="section-shell">
        <p className="section-label mb-6" aria-hidden="true">
          04 — Contact
        </p>
        <Spotlight className="rounded-lg border border-border bg-card p-6 transition-colors md:p-10">
          <div className="text-2xl font-semibold tracking-tight md:text-3xl">
            Let's Work Together
            <span className="cursor-blink font-mono font-normal text-highlight" aria-hidden="true">
              _
            </span>
          </div>
          <div className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision.
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href={email?.link} target="_self">
                <EnvelopeSimpleIcon />
                Email Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={linkedIn?.link} target="_blank" rel="noopener noreferrer">
                <ChatIcon />
                LinkedIn
              </a>
            </Button>
          </div>
          <p className="mt-6 flex items-center gap-2 font-mono text-xs text-subtle-foreground">
            <span className="size-1.5 rounded-full bg-highlight" aria-hidden="true" />
            Usually responds within 24 hours
          </p>
        </Spotlight>
      </Reveal>
    </section>
  );
}
