import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CosmoUI",
  description: "A modern UI framework for React",
  keywords: [
    "react",
    "ui",
    "framework",
    "cosmoui",
    "nextui",
    "tailwind",
    "css",
  ],
  authors: {
    name: "Daustinn",
    url: "https://daustinn.com",
  },
  category: "UI Framework",
  icons: ["/cosmoui.svg"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="preload"
        href="/fonts/Pilowlava-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
