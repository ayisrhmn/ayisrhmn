import { SocialMedia } from "@/lib/apis/social-media/social-media-type";
import { SOCIAL_MEDIA_ICONS } from "@/lib/constants";

interface FooterProps {
  socialMedias: SocialMedia[];
}

export function Footer({ socialMedias }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Muhammad Fariz Rahman. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Built with Next.js and Tailwind CSS
            </p>
          </div>
          <div className="flex gap-4">
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
    </footer>
  );
}
