import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

export function Footer() {
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
            <a
              href="https://github.com/ayisrhmn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubLogoIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ayisrhmn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinLogoIcon className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/ayisrhmn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <InstagramLogoIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:farizrahman30@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <EnvelopeSimpleIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
