import { ElementType } from "react";
import { File, FileType } from "./types";
import { Folder, FileText, FileCode, Image, Video } from "lucide-react";

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
  image: {
    icon: Image,
    color: "",
  },
  video: {
    icon: Video,
    color: "",
  },
};

export const formatFileName = (file: File) => {
  switch (file.type) {
    case "image":
    case "video":
    case "folder":
      return file.name;
    default:
      return `${file.name}.${file.type}`;
  }
};
