import type { Metadata } from "next";
import { Geist, Roboto } from "next/font/google";
import AppHeader from "@/components/AppHeader";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider";
import AppFooter from "@/components/AppFooter";

const robotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

const geistFont = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Posts app",
  description:
    "A simple post app built with Next.js, React Query, and Tailwind CSS.",
  openGraph: {
    type: "website",
    url: process.env.OG_APP_URL || "http://localhost:3000",
    title: "Post App",
    description:
      "A simple post app built with Next.js, React Query, and Tailwind CSS.",
    siteName: "Post App",
    // images: [
    //   {url: "https://example.com/og-image.jpg", width: 1200, height: 630, alt: "Og Image Alt"},
    // ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoFont.variable} ${geistFont.variable}`}>
      <body>
        <TanStackProvider>
          <AppHeader />
          {children}
          <AppFooter />
        </TanStackProvider>
      </body>
    </html>
  );
}
