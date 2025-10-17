import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clarence - Your Private, Personal AI Insurance Broker",
  description: "Find better coverage, manage renewals, and save time. No calls, no paperwork, no stress.",
  keywords: ["insurance", "AI broker", "insurance comparison", "insurance quotes"],
  openGraph: {
    title: "Clarence - Your Private, Personal AI Insurance Broker",
    description: "Find better coverage, manage renewals, and save time. No calls, no paperwork, no stress.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

