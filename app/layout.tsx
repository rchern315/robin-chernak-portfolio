import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robin Chernak | Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer focused on platform engineering, AI, automation, DevOps, data, and integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
