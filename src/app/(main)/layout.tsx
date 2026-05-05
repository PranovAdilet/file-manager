import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="size-full flex flex-col gap-10 px-10 py-4">{children}</div>
  );
}
