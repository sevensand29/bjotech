import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bjotechnology.com"),
  title: {
    default: "BJO Technology Solutions | Software Development Company",
    template: "%s | BJO Technology Solutions",
  },
  description:
    "BJO Technology Solutions builds custom software, web applications, business automation and SaaS solutions for growing organizations worldwide.",
  keywords: [
    "Software Development Company",
    "Custom Software Development",
    "Web Application Development",
    "Business Automation Solutions",
    "Technology Solutions Provider",
    "SaaS Development",
  ],
  openGraph: {
    type: "website",
    title: "BJO Technology Solutions",
    description: "Building smarter software solutions and empowering businesses.",
    siteName: "BJO Technology Solutions",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-[76px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
