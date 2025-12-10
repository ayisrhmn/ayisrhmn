import { Metadata } from "next";

export const APP_TITLE = "@Ayisrhmn - Frontend Developer";
export const APP_DESC =
  "My portfolio website showcasing frontend development projects and experience";
export const APP_URL = "https://ayisrhmn.vercel.app";
export const APP_NAME = "@Ayisrhmn";

export const METADATA_BASE: Metadata = {
  title: APP_TITLE,
  description: APP_DESC,
  applicationName: APP_NAME,
  metadataBase: new URL(APP_URL),
  verification: {
    google: "QXVlq8lAnlntE6dV6T9lXJODwjSB5c6pxMi4pTQVsDw",
  },
  category: "technology",
  openGraph: {
    title: APP_TITLE,
    description: APP_DESC,
    url: APP_URL,
    siteName: APP_NAME,
    images: [
      {
        url: `${APP_URL}/static/og-image.png`,
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: APP_TITLE,
    description: APP_DESC,
    images: [
      {
        url: `${APP_URL}/static/og-image.png`,
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
    site: APP_NAME,
  },
  authors: [
    {
      name: APP_NAME,
      url: APP_URL,
    },
  ],
  creator: APP_NAME,
  publisher: APP_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    "Muhammad Fariz Rahman",
    "Fariz Rahman",
    "Ayisrhmn",
    "Ayis",
    "Frontend Developer",
    "Frontend Engineer",
    "Senior Frontend Developer",
    "Senior Frontend Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "UI/UX Development",
    "Web Development",
    "Portfolio",
    "Indonesia Developer",
    "Surabaya Developer",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: APP_URL,
  },
};

export const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${APP_URL}/#website`,
      name: APP_TITLE,
      url: APP_URL,
      description: APP_DESC,
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${APP_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
      publisher: {
        "@id": `${APP_URL}/#person`,
      },
    },
    {
      "@type": "Person",
      "@id": `${APP_URL}/#person`,
      name: "Muhammad Fariz Rahman",
      alternateName: ["Fariz Rahman", "Fariz", "Ayisrhmn", "Ayis"],
      url: APP_URL,
      image: {
        "@type": "ImageObject",
        url: `${APP_URL}/static/og-image.png`,
        width: 1200,
        height: 630,
      },
      jobTitle: "Senior Frontend Developer",
      description: "Senior Frontend Developer specializing in React, Next.js, and TypeScript",
      knowsAbout: [
        "Frontend Development",
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Web Development",
        "UI/UX Development",
      ],
      sameAs: [
        "https://github.com/ayisrhmn",
        "https://linkedin.com/in/ayisrhmn",
        "https://instagram.com/ayisrhmn",
      ],
      worksFor: {
        "@type": "Organization",
        name: APP_NAME,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${APP_URL}/#webpage`,
      url: APP_URL,
      name: APP_TITLE,
      description: APP_DESC,
      isPartOf: {
        "@id": `${APP_URL}/#website`,
      },
      about: {
        "@id": `${APP_URL}/#person`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${APP_URL}/static/og-image.png`,
        width: 1200,
        height: 630,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${APP_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: APP_URL,
        },
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": `${APP_URL}/#profilepage`,
      url: APP_URL,
      name: "Muhammad Fariz Rahman - Portfolio",
      description: APP_DESC,
      mainEntity: {
        "@id": `${APP_URL}/#person`,
      },
      inLanguage: "en-US",
    },
  ],
};
