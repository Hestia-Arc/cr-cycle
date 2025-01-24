import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { quicksand } from "./fonts/newFont";
import MainNavigation from "./components/MainNavigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CR-Cycle CRM",
  description: "CRM System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} h-full bg-[#f2f2f2] antialiased rounded`}>
        {children}
      </body>
    </html>
  );
}
