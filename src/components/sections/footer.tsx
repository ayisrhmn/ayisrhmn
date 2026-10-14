import { SOCIAL_MEDIA_ICONS, SOCIAL_MEDIAS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 px-5 py-8 sm:px-8">
      <div className="section-shell flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="space-y-1 text-center md:text-left">
          <p className="font-mono text-xs text-muted-foreground">
            © {currentYear} Muhammad Fariz Rahman. All rights reserved.
          </p>
          <p className="text-xs text-subtle-foreground">Built with Next.js and Tailwind CSS</p>
        </div>
        <div className="flex flex-wrap justify-center gap-1">
          {SOCIAL_MEDIAS?.map((item, index) => {
            const Icon = SOCIAL_MEDIA_ICONS[item?.name as keyof typeof SOCIAL_MEDIA_ICONS];
            return (
              <a
                key={index}
                href={item?.link}
                target={item?.name === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                aria-label={item?.name}
              >
                {Icon && <Icon className="size-[18px]" />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
