import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { event } from "@/lib/content";

// Inter is the MiTran Global site's sans; used for every headline and body line.
const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
// Condensed caps for the event lock-up tile only.
const oswald = Oswald({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-lockup", display: "swap" });

// Title and description follow the active event format (lib/content.ts)
const title = event.metaTitle;
const description = event.metaDescription;

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website", siteName: "MiTran Global" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#08090c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
