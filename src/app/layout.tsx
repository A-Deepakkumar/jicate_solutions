import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./layout.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "JICATE Solutions - We Provide Truly Prominent IT Solutions",
  description: "JICATE Solutions is a leading IT company providing innovative technology solutions including web development, web design, business automation, digital marketing, and more.",
  keywords: "IT solutions, web development, web design, digital marketing, business automation, JICATE Solutions",
  authors: [{ name: "JICATE Solutions" }],
  openGraph: {
    title: "JICATE Solutions - We Provide Truly Prominent IT Solutions",
    description: "JICATE Solutions is a leading IT company providing innovative technology solutions.",
    type: "website",
    locale: "en_US",
    siteName: "JICATE Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="html-root">
      <body className={`${poppins.className} body-root`}>
        {children}
      </body>
    </html>
  );
}
