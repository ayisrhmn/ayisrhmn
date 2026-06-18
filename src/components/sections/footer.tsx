import { SOCIAL_MEDIA_ICONS, SOCIAL_MEDIAS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-[3px] border-border bg-card px-4 py-8 shadow-[0_-4px_0_var(--pixel-shadow)]">
      <div className="mx-auto max-w-6xl">
        <div className="pixel-inner-panel flex flex-col items-center justify-between gap-6 p-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="pixel-text text-[9px] leading-relaxed text-muted-foreground">
              © {currentYear} Muhammad Fariz Rahman. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Built with Next.js and Tailwind CSS
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {SOCIAL_MEDIAS?.map((item, index) => {
              const Icon = SOCIAL_MEDIA_ICONS[item?.name as keyof typeof SOCIAL_MEDIA_ICONS];
              return (
                <a
                  key={index}
                  href={item?.link}
                  target={item?.name === "Email" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="pixel-press flex size-10 items-center justify-center border-[3px] border-border bg-background text-muted-foreground shadow-[4px_4px_0_var(--pixel-shadow)] hover:text-primary"
                  aria-label={item?.name}
                >
                  {Icon && <Icon className="w-6 h-6" />} {/* render kalau ada */}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
