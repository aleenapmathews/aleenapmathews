import type { Metadata } from "next";
import { Inter,Pirata_One } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const pirataOne=Pirata_One({weight:"400",subsets:['latin']});

export const metadata: Metadata = {
  title: "Aleena P Mathews",
  description:
    "This website is a space where I blend my technical skills with my creative interests, showcasing a collection of my work.I invite you to explore, learn more about what I do, and hopefully, get inspired along the way. ",
  authors: [
    { name: "Aleena P Mathews", url: "https://aleenapmathews.github.io/" },
  ],
  abstract: "This is portfolio website ",
  icons: "/icon.svg",
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
