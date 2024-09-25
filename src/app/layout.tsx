import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mozilla Phenox Club JUET",
  description: "Mozilla Phenox Club JUET a student community made to help students learn about open source and mozilla projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Changa:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
