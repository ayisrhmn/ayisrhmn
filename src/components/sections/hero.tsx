import { Button } from "@/components/ui/button";
import { HERO, SOCIAL_MEDIA_ICONS, SOCIAL_MEDIAS } from "@/lib/constants";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

// Reuses the stack already listed at the end of the sub-headline ("... with A, B, and C.").
const STACK =
  HERO?.subHeadline
    ?.split(" with ")[1]
    ?.replace(/\.$/, "")
    .split(/,\s*(?:and\s+)?/)
    .filter(Boolean) ?? [];

export function Hero() {
  return (
    <section className="px-5 pt-20 pb-16 sm:px-8 md:pt-28 md:pb-24">
      <div className="section-shell">
        <p className="enter font-mono text-xs text-highlight sm:text-sm">{"// hello, I'm Fariz"}</p>
        <h1 className="mt-4 text-4xl leading-[1.05] font-semibold tracking-tighter text-balance sm:text-5xl md:text-6xl">
          {HERO?.headline}
          <span className="cursor-blink font-mono font-normal text-highlight" aria-hidden="true">
            _
          </span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
          {HERO?.subHeadline}
        </p>

        {STACK.length > 0 && (
          <ul
            className="enter mt-6 flex flex-wrap gap-2"
            style={{ animationDelay: "120ms" }}
            aria-hidden="true"
          >
            {STACK.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border px-2 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div
          className="enter mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
          style={{ animationDelay: "200ms" }}
        >
          <div className="flex flex-col gap-3 min-[400px]:flex-row">
            <Button asChild>
              <a href="#contact">
                Get in Touch
                <ArrowRightIcon />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          <div className="flex gap-1">
            {SOCIAL_MEDIAS?.map((item, index) => {
              const Icon = SOCIAL_MEDIA_ICONS[item?.name as keyof typeof SOCIAL_MEDIA_ICONS];
              return (
                <a
                  key={index}
                  href={item?.link}
                  target={item?.name === "Email" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-md text-subtle-foreground transition-colors hover:bg-accent hover:text-foreground"
                  aria-label={item?.name}
                >
                  {Icon && <Icon className="size-[18px]" />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
