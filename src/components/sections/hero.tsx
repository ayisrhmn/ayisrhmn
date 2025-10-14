import { Button } from "@/components/ui/button";
import { Hero as HeroType } from "@/lib/apis/hero/hero-type";
import { SocialMedia } from "@/lib/apis/social-media/social-media-type";
import { SOCIAL_MEDIA_ICONS } from "@/lib/constants";
import { ThemeToggle } from "../ui/theme-toggle";

interface HeroProps {
  hero: HeroType;
  socialMedias: SocialMedia[];
}

export function Hero({ hero, socialMedias }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            {hero?.headline}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-pretty">
            {hero?.subHeadline}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            {/* <Button size="lg" variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button> */}
          </div>
          <div className="flex gap-4 pt-6">
            {socialMedias?.map((item) => {
              const Icon = SOCIAL_MEDIA_ICONS[item?.name];
              return (
                <a
                  key={item?.id}
                  href={item?.link}
                  target={item?.name === "Email" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={item?.name}
                >
                  {Icon && <Icon className="w-6 h-6" />} {/* render kalau ada */}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
