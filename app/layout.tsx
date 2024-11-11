import "./global.css";
import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { Providers } from "app/components/providers";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Wahyu Ikbal Maulana — Fullstack Developer",
    template: "%s | Jake Mackie",
  },
  description: "19 year old apprentice fullstack developer based in Cornwall.",
  openGraph: {
    title: {
      default: "Jake Mackie — Fullstack Developer",
      template: "%s | Jake Mackie",
    },
    images: [
      {
        url: "/ogimage.png",
      },
    ],
    description:
      "19 year old apprentice fullstack developer based in Cornwall, United Kingdom.",
    url: baseUrl,
    siteName: "Jake Mackie",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Jake Mackie — Fullstack Developer",
      template: "%s | Jake Mackie",
    },
    description:
      "19 year old apprentice fullstack developer based in Cornwall, United Kingdom.",
    images: ["/ogimage.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const figtree = Figtree({ subsets: ["latin"], display: "swap" });

const cx = (...classes) => classes.filter(Boolean).join(" ");

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx("text-foreground bg-background", figtree.className)}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 sm:mx-auto">
        <Providers>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 leading-loose">
            <Navbar />
            {children}
            <Footer />
          </main>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
