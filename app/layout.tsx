import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Archana Saha | Senior Frontend & WordPress Developer",
  description: "Senior Frontend and WordPress Developer specializing in WordPress, React, Next.js, responsive websites and modern web applications",
  metadataBase: new URL("https://archanasaha.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Archana Saha | Senior Frontend & WordPress Developer",
    description: "Senior Frontend and WordPress Developer specializing in WordPress, React, Next.js, responsive websites and modern web applications.",
    url: "https://archanasaha.com",
    siteName: "Archana Saha Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archana Saha | Senior Frontend & WordPress Developer",
    description: "Senior Frontend and WordPress Developer specializing in WordPress, React, Next.js, responsive websites and modern web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8F7F4] text-[#171717] font-body">
        {children}
      </body>
    </html>
  );
}
