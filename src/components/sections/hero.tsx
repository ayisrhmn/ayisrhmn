import { Button } from "@/components/ui/button";
import { HERO, SOCIAL_MEDIA_ICONS, SOCIAL_MEDIAS } from "@/lib/constants";
import { ThemeToggle } from "../ui/theme-toggle";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            {HERO?.headline}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-pretty">
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
                  className="text-muted-foreground hover:text-foreground transition-colors"
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
