import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "OpenCorex",
    template: "%s | OpenCorex",
  },
  description:
    "OpenCorex is a trusted front door for open resilience software, contributor pathways, and clear public documentation.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
