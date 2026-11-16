import { HERO, SOCIAL_MEDIAS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="shell flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-5 font-mono text-[12.5px] text-subtle-foreground">
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground">
            © {currentYear} {HERO.name}. All rights reserved.
          </p>
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
        <ul className="flex flex-wrap gap-x-6">
          {SOCIAL_MEDIAS.map((item) => {
            const isEmail = item.name === "Email";
            return (
              <li key={item.name}>
                <a
                  href={item.link}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  className="text-link"
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
