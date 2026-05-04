import { FilesHeader } from "@/widgets/files-view";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="size-full flex flex-col gap-10 px-10 py-4">
      <FilesHeader />
      {children}
    </div>
  );
};

export default Layout;
