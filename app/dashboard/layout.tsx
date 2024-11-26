import type { Metadata } from "next";
import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";
import { quicksand } from "../fonts/newFont";

export const metadata: Metadata = {
  title: "Dashboard - CR-Cycle CRM",
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
        className={`flex gap-2 h-[100vh] overflow-hidden p-1 bg-stone-200  ${quicksand.className} antialiased`}
      >
        <SideBar />
        <main className=" flex-grow ">
          <NavigationBar />
          <div className=" h-[86vh] overflow-y-auto pr-1 rounded my-3">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

// bg-[#8b8b8b46]