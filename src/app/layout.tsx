import { ThemeProvider } from "@/providers/theme-provider";
import { Analytics } from "@vercel/analytics/next";
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
  title: "@Ayisrhmn - Sr. Frontend Engineer",
  description: "My portfolio website showcasing frontend development projects and experience",
  keywords: [
    "Ayisrhmn",
    "Muhammad Fariz Rahman",
    "Fariz",
    "Frontend Engineer",
    "Senior Frontend Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Fariz Rahman" }],
  metadataBase: new URL("https://ayisrhmn.vercel.app"),
  openGraph: {
    title: "@Ayisrhmn - Sr. Frontend Engineer",
    description: "My portfolio website showcasing frontend development projects and experience",
    url: "https://ayisrhmn.vercel.app",
    siteName: "Fariz Portfolio",
    images: [
      {
        url: "https://ayisrhmn.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fariz Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "@Ayisrhmn - Sr. Frontend Engineer",
    description: "My portfolio website showcasing frontend development projects and experience",
    images: ["https://ayisrhmn.vercel.app/og-image.png"],
    creator: "@ayisrhmn",
  },
  other: {
    "google-site-verification": "QXVlq8lAnlntE6dV6T9lXJODwjSB5c6pxMi4pTQVsDw",
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Muhammad Fariz Rahman",
      alternateName: "@Ayisrhmn",
      jobTitle: "Senior Frontend Engineer",
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
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
