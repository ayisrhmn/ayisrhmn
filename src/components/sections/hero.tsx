import { Button } from "@/components/ui/button";
import { HERO, SOCIAL_MEDIA_ICONS, SOCIAL_MEDIAS } from "@/lib/constants";
import { ThemeToggle } from "../ui/theme-toggle";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20">
      <div className="fixed top-4 right-4 z-50 md:top-6 md:right-6">
        <ThemeToggle />
      </div>

      <div className="relative w-full max-w-5xl">
        <div
          className="absolute -top-5 left-6 h-10 w-28 border-[3px] border-border bg-accent shadow-[6px_6px_0_var(--pixel-shadow)] md:-left-8 md:top-12"
          aria-hidden="true"
        />
        <div
          className="absolute -right-3 bottom-8 h-16 w-16 border-[3px] border-border bg-primary shadow-[6px_6px_0_var(--pixel-shadow)] md:-right-10"
          aria-hidden="true"
        />
        <div className="pixel-panel pixel-corner-blocks relative space-y-8 px-5 py-8 md:px-10 md:py-12">
          <div
            className="h-4 w-24 border-[3px] border-border bg-secondary shadow-[4px_4px_0_var(--pixel-shadow)] md:w-36"
            aria-hidden="true"
          />
          <div className="grid gap-8 lg:grid-cols-[1fr_220px] lg:items-end">
            <div className="space-y-6">
              <h1 className="pixel-text max-w-4xl text-3xl leading-relaxed text-balance text-primary md:text-5xl">
                {HERO?.headline}
              </h1>
              <p className="max-w-2xl border-l-4 border-accent bg-background/35 py-3 pl-4 text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
                {HERO?.subHeadline}
              </p>
            </div>
            <div className="pixel-inner-panel hidden aspect-square p-4 lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:gap-2">
              {Array.from({ length: 16 }).map((_, index) => (
                <span
                  key={index}
                  className={`border-2 border-border ${
                    index % 5 === 0
                      ? "bg-accent"
                      : index % 3 === 0
                        ? "bg-secondary"
                        : "bg-primary/35"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
          <div className="pixel-inner-panel flex flex-col gap-5 p-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-4">
              {SOCIAL_MEDIAS?.map((item, index) => {
                const Icon = SOCIAL_MEDIA_ICONS[item?.name as keyof typeof SOCIAL_MEDIA_ICONS];
                return (
                  <a
                    key={index}
                    href={item?.link}
                    target={item?.name === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="pixel-press flex size-10 items-center justify-center border-[3px] border-border bg-card text-muted-foreground shadow-[4px_4px_0_var(--pixel-shadow)] hover:text-primary"
                    aria-label={item?.name}
                  >
                    {Icon && <Icon className="w-6 h-6" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
