import { ThemeProvider } from "@/providers/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type React from "react";
import { Suspense } from "react";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "@Ayisrhmn - Frontend Developer",
  description: "My portfolio website showcasing frontend development projects and experience",
  applicationName: "@Ayisrhmn - Frontend Developer",
  metadataBase: new URL("https://ayisrhmn.vercel.app"),
  authors: [{ name: "Muhammad Fariz Rahman", url: "https://ayisrhmn.vercel.app" }],
  keywords: [
    "Muhammad Fariz Rahman",
    "Fariz",
    "Ayis",
    "Ayisrhmn",
    "Frontend",
    "Frontend Developer",
    "Frontend Engineer",
    "Senior Frontend Developer",
    "Senior Frontend Engineer",
    "Next",
    "Next.js",
    "React",
    "Portfolio",
  ],
  openGraph: {
    title: "@Ayisrhmn - Frontend Developer",
    description: "My portfolio website showcasing frontend development projects and experience",
    url: "https://ayisrhmn.vercel.app",
    siteName: "@Ayisrhmn - Frontend Developer",
    images: [
      {
        url: "https://ayisrhmn.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fariz Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "@Ayisrhmn - Frontend Developer",
    description: "My portfolio website showcasing frontend development projects and experience",
    images: [
      {
        url: "https://ayisrhmn.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fariz Portfolio Preview",
      },
    ],
    creator: "@ayisrhmn",
  },
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
    canonical: "https://ayisrhmn.vercel.app",
  },
  other: {
    "google-site-verification": "QXVlq8lAnlntE6dV6T9lXJODwjSB5c6pxMi4pTQVsDw",
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Muhammad Fariz Rahman",
      alternateName: "@Ayisrhmn",
      jobTitle: "Frontend Developer",
      url: "https://ayisrhmn.vercel.app",
      sameAs: [
        "https://github.com/ayisrhmn",
        "https://linkedin.com/in/ayisrhmn",
        "https://instagram.com/ayisrhmn",
      ],
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "@Ayisrhmn - Frontend Developer",
        url: "https://ayisrhmn.vercel.app",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://ayisrhmn.vercel.app/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        name: "@Ayisrhmn - Frontend Developer",
        url: "https://ayisrhmn.vercel.app",
        logo: "https://ayisrhmn.vercel.app/og-image.png",
        sameAs: ["https://twitter.com/ayisrhmn"],
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
