"use client";

import { Share2, Star } from "lucide-react";
import { File } from "../model/types";
import { Button } from "@/shared/ui";
import { fileIcons, formatFileName } from "../model/config";
import { ReactNode } from "react";

type Props = {
  file: File;
  onOpen: (file: File) => void;
  favoriteButton: ReactNode;
};

export const FileCard = ({ file, onOpen, favoriteButton }: Props) => {
  const iconMap = fileIcons[file.type] ?? fileIcons.txt;
  const Icon = iconMap.icon;
  const color = iconMap.color;
  return (
    <div
      role="button"
      className="
      flex items-center justify-between p-4 rounded-lg
      cursor-pointer hover:bg-hover
      focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
      onClick={() => onOpen(file)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(file);
        }
      }}
    >
      <div className="flex items-center gap-3">
        <Icon className={color} size="30" />
        <p className="text-foreground">{formatFileName(file)}</p>
      </div>
      <div className="flex gap-5">
        {favoriteButton}
        <Button onClick={(e) => e.stopPropagation()} variant="ghost">
          <Share2 size="20" />
        </Button>
      </div>
    </div>
  );
};
