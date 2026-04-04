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

export const HERO = {
  headline: "Frontend Developer",
  subHeadline:
    "Based in Indonesia, crafting user-centric interfaces with React, Next.js, and modern web tech.",
};

export const SOCIAL_MEDIAS = [
  { name: "Instagram", link: "https://instagram.com/ayisrhmn" },
  { name: "Email", link: "mailto:farizrahman30@gmail.com" },
  { name: "GitHub", link: "https://github.com/ayisrhmn" },
  { name: "LinkedIn", link: "https://linkedin.com/in/ayisrhmn" },
];

export const ABOUT = `I'm **Muhammad Fariz Rahman** — a Frontend Developer based in Indonesia.

I’m passionate about crafting accessible, fast, and visually refined interfaces that balance clean design with solid engineering. Over the past **7+ years**, I’ve focused on building seamless experiences across web and mobile using **React**, **Next.js**, and **Ionic**, while occasionally exploring **React Native** and **Nuxt**.

Though my main expertise lies in frontend, I’ve also worked with **Express**, **Fastify**, and **NestJS** on personal projects, along with databases like **MySQL**, **PostgreSQL**, and **MongoDB** — giving me a broader understanding of full-stack workflows and system design.

My approach to development combines **attention to detail**, **performance**, and **usability**, ensuring that every product I work on feels intuitive, reliable, and built to last.

When I’m not coding, I usually spend my time learning new web technologies, refining side projects, or catching up with games and chill playlists.`;

export const EXPERIENCES = [
  {
    period: "May 2024 — Present",
    title: "Frontend Developer",
    company: "Native Productions",
    link: "https://nvpdev.tech",
    description: `I build modern web and mobile applications using **React, Next.js, and Ionic**, transforming product ideas into clean and intuitive user interfaces. I focus on optimizing performance to ensure applications run smoothly even at scale, while collaborating closely with backend engineers and product teams to deliver reliable, high-quality features.`,
    skills: ["React", "Next.js", "Ionic", "TypeScript", "JavaScript"],
  },
  {
    period: "Oct 2020 — Mar 2026",
    title: "Senior Frontend Developer",
    company: "Kano Solution",
    link: "https://kanosolution.com",
    description: `I develop and scale web applications across multiple projects, focusing on building and maintaining clean, scalable frontend architectures. I work within the **Vue.js, Nuxt.js, and React ecosystems**, ensuring high code quality while keeping performance and long-term maintainability in check.`,
    skills: ["Vue.js", "Nuxt.js", "React Native", "TypeScript", "JavaScript"],
  },
  {
    period: "Nov 2023 — Oct 2024",
    title: "Test Automation Engineer",
    company: "PT HM Sampoerna Tbk.",
    link: "https://www.sampoerna.com",
    description: `I set up automated testing for both web and Android applications, ensuring product quality through comprehensive end-to-end testing flows. My focus is on catching issues early in the development process so they don’t make it to production.`,
    skills: ["WebdriverIO", "Jenkins", "TypeScript", "JavaScript"],
  },
  {
    period: "Sep 2018 — Oct 2020",
    title: "Web Developer",
    company: "Genesys Integrated Indonesia",
    link: "https://genesysindonesia.com",
    description: `I build web applications using **Vue.js and Laravel**, creating reusable components and clean, intuitive user interfaces. I also support product needs by delivering reliable features that align with overall functionality and user experience.`,
    skills: ["Vue.js", "JavaScript", "Laravel", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "IngreAI — Ingredients Intelligence",
    description:
      "AI-Powered Ingredient Scanner & Recipe Generator. Scan your ingredients and get smart recipe suggestions instantly.",
    image: "/projects/ingre-ai.jpg",
    tags: ["Next.js", "TypeScript", "Shadcn UI", "Gemini 2.0 Flash Lite"],
    github: "https://github.com/ayisrhmn/ingre-ai",
    demo: "https://ingre-ai.vercel.app",
  },
  {
    title: "EventScope — Master Your Event Tracking",
    description:
      "The ultimate playground to design, simulate, and validate your analytics events. Ensure data quality with our Schema Builder and Event Simulator.",
    image: "/projects/event-scope.jpg",
    tags: ["Next.js", "TypeScript", "Shadcn UI", "Zustand"],
    github: "https://github.com/ayisrhmn/event-scope",
    demo: "https://event-scope-labs.vercel.app",
  },
];
