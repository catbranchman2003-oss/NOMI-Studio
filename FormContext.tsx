import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOMI Studio — Creator Monetisation & Audience Psychology",
  description:
    "Helping creators build emotionally invested, long-term paying audiences through retention strategy, monetisation psychology, and fan loyalty systems.",
  openGraph: {
    title: "NOMI Studio",
    description: "Attention alone does not create loyalty.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
