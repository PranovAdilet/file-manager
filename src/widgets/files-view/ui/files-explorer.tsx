"use client";

import { useRouter } from "next/navigation";
import { File, FileCard } from "@/entities/file";
import { ROUTES } from "@/shared/config";

type Props = {
  id?: string;
  intitialFiles?: File[];
};

export const FilesExplorer = ({ id, intitialFiles = [] }: Props) => {
  const router = useRouter();

  const folderId = id ?? null;

  const handleOpen = (file: File) => {
    if (file.type === "folder") {
      router.push(ROUTES.file(file.id));
    }
  };
  const children = intitialFiles?.filter((file) => file.parentId === folderId);

  return (
    <div className="flex flex-col w-full">
      {children.length > 0 ? (
        children.map((file) => (
          <FileCard key={file.id} file={file} onOpen={handleOpen} />
        ))
      ) : (
        <div className="flex flex-col text-muted-foreground text-center">
          <p className="text-sm">Эта папка пуста.</p>
        </div>
      )}
    </div>
  );
};
