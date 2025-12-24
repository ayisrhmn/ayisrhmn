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
    title: "EventScope — Master Your Event Tracking",
    description:
      "The ultimate playground to design, simulate, and validate your analytics events. Ensure data quality with our Schema Builder and Event Simulator.",
    image: "/projects/event-scope.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Zustand"],
    github: "https://github.com/ayisrhmn/event-scope",
    demo: "https://event-scope-labs.vercel.app",
  },
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
