import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yasith Umesha | Portfolio",
  description: "Portfolio website of Yasith Umesha, software engineer and full-stack developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
