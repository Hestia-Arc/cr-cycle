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
      <body
        className={`${quicksand.className} antialiased m-1 rounded`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainNavigation />

        <main className=" min-h-[565px] bg-stone-400 rounded-bl-md rounded-br-md">{children}</main>
      </body>
    </html>
  );
}
