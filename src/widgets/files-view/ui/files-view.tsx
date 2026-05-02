"use client";

import { File, FileCard } from "@/entities/file-card";
import { Button } from "@/shared/ui";
import { ArrowUpFromLine, Files as FilesIcon } from "lucide-react";

export const FilesView = () => {
  return (
    <div className="size-full flex flex-col gap-10 px-10 py-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <FilesIcon size="33" />
          <h3 className="font-bold text-2xl">Ваши файлы</h3>
        </div>
        <div>
          <Button variant="square">
            <ArrowUpFromLine size="16" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-7 w-full p-3">
        {filesMock.map((file) => (
          <FileCard key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
};

const filesMock: File[] = [
  {
    id: crypto.randomUUID(),
    isFavorite: false,
    name: "регламент разработки",
    type: "folder",
  },
  {
    id: crypto.randomUUID(),
    isFavorite: true,
    name: "текстовые доки",
    type: "folder",
  },
];
