import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

export const SOCIAL_MEDIA_ICONS = {
  GitHub: GithubLogoIcon,
  LinkedIn: LinkedinLogoIcon,
  Instagram: InstagramLogoIcon,
  Email: EnvelopeSimpleIcon,
};

export const PROJECTS = [
  {
    title: "IngreAI — Ingredients Intelligence",
    description:
      "AI-Powered Ingredient Scanner & Recipe Generator. Scan your ingredients and get smart recipe suggestions instantly.",
    image: "/projects/ingre-ai.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Gemini 2.0 Flash Lite"],
    github: "https://github.com/ayisrhmn/ingre-ai",
    demo: "https://ingre-ai.vercel.app",
  },
];
