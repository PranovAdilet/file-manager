import { ElementType } from "react";
import { File, FileType } from "./types";
import { Folder, FileText, FileCode } from "lucide-react";

type Icon = {
  icon: ElementType;
  color: string;
};

export const fileIcons: Record<FileType, Icon> = {
  folder: {
    icon: Folder,
    color: "text-orange-400 fill-orange-400",
  },
  md: {
    icon: FileText,
    color: "fill-blue-500",
  },
  pdf: {
    icon: FileText,
    color: "fill-red-500 text-red-500",
  },
  txt: {
    icon: FileText,
    color: "fill-white",
  },
  xml: {
    icon: FileCode,
    color: "text-purple-400",
  },
};

export const formatFileName = (file: File) => {
  if (file.type === "folder") return file.name;

  return `${file.name}.${file.type}`;
};
