"use client";

import { Folder, Share2, Star } from "lucide-react";
import { File } from "../model/types";
import { Button } from "@/shared/ui";

type Props = {
  file: File;
};

export const FileCard = ({ file }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Folder className="text-orange-400 fill-orange-400" size="30" />
        <p className="text-foreground">{file.name}</p>
      </div>
      <div className="flex gap-5">
        <Button variant="ghost">
          <Star size="20" />
        </Button>
        <Button variant="ghost">
          <Share2 size="20" />
        </Button>
      </div>
    </div>
  );
};
