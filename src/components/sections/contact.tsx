import { SOCIAL_MEDIAS } from "@/lib/constants";
import { ArrowUpRightIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { SectionHeading } from "../ui/section-heading";

export function Contact() {
  const email = SOCIAL_MEDIAS.find((item) => item.name === "Email");
  const linkedIn = SOCIAL_MEDIAS.find((item) => item.name === "LinkedIn");

  return (
    <section id="contact" className="section">
      <SectionHeading index="04" title="Contact" compact />
      <div className="reveal flex flex-col items-start gap-7 border border-border-strong bg-card p-[clamp(1.75rem,6vw,4.5rem)]">
        <p className="font-display text-[clamp(2.5rem,6.4vw,5.75rem)] leading-[0.96] font-bold tracking-[-0.045em]">
          Let&apos;s work together
          <span aria-hidden="true" className="text-highlight">
            .
          </span>
        </p>
        <p className="max-w-[35rem] text-lg leading-[1.6] text-pretty text-muted-foreground">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
          part of your vision.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={email?.link} className="btn btn-primary">
            <EnvelopeSimpleIcon aria-hidden="true" className="size-4" />
            Email me
          </a>
          <a
            href={linkedIn?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            LinkedIn
            <ArrowUpRightIcon aria-hidden="true" className="size-3" />
          </a>
        </div>
        <p className="flex items-center gap-2.5 font-mono text-[13px] text-subtle-foreground">
          <span aria-hidden="true" className="size-2 bg-highlight" />
          Usually responds within 24 hours
        </p>
      </div>
    </section>
  );
}
