"use client";

import { Folder, Share2, Star } from "lucide-react";
import { File } from "../model/types";
import { Button } from "@/shared/ui";

type Props = {
  file: File;
  onOpen: (file: File) => void;
};

export const FileCard = ({ file, onOpen }: Props) => {
  return (
    <div
      className="
      flex items-center justify-between p-4 rounded-lg
      cursor-pointer hover:bg-hover
      focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
      onClick={() => onOpen(file)}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(file);
        }
      }}
    >
      <div className="flex items-center gap-3">
        <Folder className="text-orange-400 fill-orange-400" size="30" />
        <p className="text-foreground">{file.name}</p>
      </div>
      <div className="flex gap-5">
        <Button onClick={(e) => e.stopPropagation()} variant="ghost">
          <Star size="20" />
        </Button>
        <Button onClick={(e) => e.stopPropagation()} variant="ghost">
          <Share2 size="20" />
        </Button>
      </div>
    </div>
  );
};
