import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CAVELAB",
  description: "CAVELAB combines precision engineering with intelligent software to create comprehensive healthcare solutions. Making healthy living effortless and accessible to all.",
  keywords: "healthcare, 3D printing, medical devices, health technology, Hong Kong, HKU",
  authors: [{ name: "CAVELAB Ltd" }],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "CAVELAB - Healthcare Innovation Through Technology",
    description: "Combining precision engineering with intelligent software to create comprehensive healthcare solutions.",
    url: "https://www.cavelab.hk",
    siteName: "CAVELAB",
    locale: "en_HK",
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
      <body>
        {children}
      </body>
    </html>
  );
}
