import type { Metadata, Viewport } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolioData";

export const viewport: Viewport = {
  themeColor: "#030014",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://yasith-umesha.vercel.app"),
  title: `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
  description: `${portfolioData.personal.name} — ${portfolioData.personal.role} & ${portfolioData.personal.degree} at ${portfolioData.personal.university}. Explore projects, technical skills, certifications, and experience.`,
  keywords: [
    portfolioData.personal.name,
    "Yasith Umesha",
    "Full-Stack Developer",
    "Web Developer Sri Lanka",
    "Sabaragamuwa University of Sri Lanka",
    "Information Systems",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "Tailwind CSS",
    "Developer Portfolio"
  ],
  authors: [{ name: portfolioData.personal.name, url: portfolioData.contact.github }],
  creator: portfolioData.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
    description: portfolioData.personal.shortBio,
    siteName: `${portfolioData.personal.name} Portfolio`,
    images: [
      {
        url: "/avatar.svg",
        width: 800,
        height: 800,
        alt: `${portfolioData.personal.name} Portfolio Avatar`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
    description: portfolioData.personal.shortBio,
    images: ["/avatar.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/avatar.svg",
    shortcut: "/avatar.svg",
    apple: "/avatar.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#030014] text-slate-100 antialiased selection:bg-purple-600/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
