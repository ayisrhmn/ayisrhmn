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
  headline: "Full-stack Developer",
  subHeadline:
    "Based in Indonesia, building polished, reliable web experiences across the stack with TypeScript, React, Next.js, and Node.js.",
};

export const SOCIAL_MEDIAS = [
  { name: "Instagram", link: "https://instagram.com/ayisrhmn" },
  { name: "Email", link: "mailto:farizrahman30@gmail.com" },
  { name: "GitHub", link: "https://github.com/ayisrhmn" },
  { name: "LinkedIn", link: "https://linkedin.com/in/ayisrhmn" },
];

export const ABOUT = `I'm **Muhammad Fariz Rahman** — a Full-stack Developer based in Indonesia.

I’m passionate about building accessible, fast, and visually refined digital experiences that balance thoughtful design with solid engineering. Over the past **7+ years**, I’ve built seamless experiences across web and mobile using **React**, **Next.js**, and **Ionic**, while also working with **React Native** and **Nuxt**.

Alongside my frontend experience, I’ve worked across the backend with **NestJS**, **Express**, and **Fastify**, as well as databases like **PostgreSQL**, **MySQL**, and **MongoDB**. This has given me a broader perspective on full-stack development, from building polished user interfaces to designing APIs, working with data, and thinking through system architecture.

My approach to development combines **attention to detail**, **performance**, and **maintainability**, with a focus on building products that are intuitive, reliable, and built to last.

When I’m not coding, I usually spend my time learning new web technologies, refining side projects, or catching up with games and chill playlists.`;

export const EXPERIENCES = [
  {
    period: "May 2024 — Present",
    title: "Full-stack Developer",
    company: "Native Productions",
    link: "https://nvpdev.tech",
    description: `I build modern web and mobile applications using **React, Next.js, and Ionic**, transforming product ideas into clean and intuitive user interfaces. I focus on optimizing performance to ensure applications run smoothly even at scale, while collaborating closely with C-Level, backend engineers and product teams to deliver reliable, high-quality features.`,
    skills: ["TypeScript", "Next.js", "Ionic", "NestJS", "PostgreSQL"],
  },
  {
    period: "Oct 2020 — Mar 2026",
    title: "Senior Frontend Engineer",
    company: "Kano Solution",
    link: "https://kanosolution.com",
    description: `I develop and scale web applications across multiple projects, focusing on building and maintaining clean, scalable frontend architectures. I work within the **Vue.js, Nuxt.js, and React ecosystems**, ensuring high code quality while keeping performance and long-term maintainability in check.`,
    skills: ["TypeScript", "Vue.js", "Nuxt.js", "React Native", "Go", "MongoDB"],
  },
  {
    period: "Nov 2023 — Oct 2024",
    title: "Test Automation Engineer",
    company: "PT HM Sampoerna Tbk.",
    link: "https://www.sampoerna.com",
    description: `I set up automated testing for both web and Android applications, ensuring product quality through comprehensive end-to-end testing flows. My focus is on catching issues early in the development process so they don’t make it to production.`,
    skills: ["JavaScript", "WebdriverIO", "Jenkins"],
  },
  {
    period: "Sep 2018 — Oct 2020",
    title: "Web Developer",
    company: "Genesys Integrated Indonesia",
    link: "https://genesysindonesia.com",
    description: `I build web applications using **Vue.js and Laravel**, creating reusable components and clean, intuitive user interfaces. I also support product needs by delivering reliable features that align with overall functionality and user experience.`,
    skills: ["JavaScript", "Vue.js", "Laravel", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Mager AI - Konten Mulus, Effort Minus",
    description:
      "Part of a development team building a AI content generator platform. Focused on engineering high-performance Next.js interfaces and scaling backend services with NestJS to handle content generation.",
    image: "/projects/mager-ai.png",
    tags: ["TypeScript", "Next.js", "NestJS", "PostgreSQL"],
    github: null,
    demo: "https://mageran.ai/home",
  },
  {
    title: "Mager Klip - Satu Video, Puluhan Klip Viral!",
    description:
      "Part of a development team building a AI-powered video clipping platform. Focused on engineering high-performance Next.js interfaces and scaling backend services with NestJS to handle content generation.",
    image: "/projects/mager-klip.png",
    tags: ["TypeScript", "Next.js", "NestJS", "PostgreSQL"],
    github: null,
    demo: "https://klip.mageran.ai",
  },
  {
    title: "Native Academy - Bantu kamu jago kerja secara digital",
    description:
      "Part of a development team building a unified LMS ecosystem. Developed scalable frontend structures with Next.js and TypeScript, delivering a high-performance and accessible platform through consistent, reusable UI components.",
    image: "/projects/nativy.png",
    tags: ["TypeScript", "Next.js", "NestJS", "PostgreSQL"],
    github: null,
    demo: "https://nativeacademy.id",
  },
  {
    title: "KaloriBot — AI Calorie Estimator",
    description:
      "AI-powered Telegram bot that analyzes food photos and estimates calories instantly. Simply send a meal photo and receive an estimated calorie breakdown in seconds.",
    image: "/projects/kalori-bot.png",
    tags: ["Telegram Bot", "JavaScript", "Node.js", "Telegraf", "OpenRouter"],
    github: "https://github.com/ayisrhmn/calorie-telegram-bot",
    demo: "https://t.me/id_kalori_bot",
  },
];
