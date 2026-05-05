import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import AppHeader from "@/components/AppHeader";
import TanStackProvider from "@/components/TanStackProvider";
import "./globals.css";

const robotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Notes app",
  description: "A simple notes app",
  openGraph: {
    type: "website",
    url: process.env.OG_APP_URL || "http://localhost:3000",
    title: "Notes App",
    description: "A simple notes app",
    siteName: "Notes App",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotoFont.variable}>
      <body>
        <TanStackProvider>
          <AppHeader />
          {children}
        </TanStackProvider>
      </body>
    </html>
  );
}
