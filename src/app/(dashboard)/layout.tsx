import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";
import { ReactNode } from "react";

export default function DashBoardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col size-full">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex">{children}</main>
      </div>
    </div>
  );
}
