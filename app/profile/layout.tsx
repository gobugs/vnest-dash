import type { Metadata } from "next";
import Sidenav from "@/app/_components/sidenav";
import Topnav from "../_components/topnav";

export const metadata: Metadata = {
  title: "Company Profile",
  description: "Profile",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full h-full bg-[#DDDDDD]">
        <Sidenav />
        <div className="flex flex-col max-w-screen-xl h-full w-full overflow-y-auto pb-10">
            <Topnav />
            {children}
        </div>
    </div>
  );
}
