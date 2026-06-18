import { Button } from "@/components/ui/button";
import { HERO, SOCIAL_MEDIA_ICONS, SOCIAL_MEDIAS } from "@/lib/constants";
import { ThemeToggle } from "../ui/theme-toggle";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 py-20">
      <div className="fixed top-4 right-4 z-50 md:top-6 md:right-6">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl w-full">
        <div className="pixel-panel relative space-y-6 px-5 py-8 md:px-8 md:py-10">
          <div
            className="h-4 w-24 border-[3px] border-border bg-secondary shadow-[4px_4px_0_var(--pixel-shadow)]"
            aria-hidden="true"
          />
          <h1 className="pixel-text text-3xl leading-relaxed text-balance text-primary md:text-5xl">
            {HERO?.headline}
          </h1>
          <p className="max-w-2xl border-l-4 border-accent pl-4 text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
            {HERO?.subHeadline}
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
    </section>
  );
}
