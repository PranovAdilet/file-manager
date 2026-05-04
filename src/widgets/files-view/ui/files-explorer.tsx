"use client";

import { useRouter } from "next/navigation";
import { File, FileCard } from "@/entities/file-card";
import { ROUTES } from "@/shared/config";

export const FilesExplorer = ({ id }: { id?: string }) => {
  const router = useRouter();

  const folderId = id ?? null;

  const handleOpen = (file: File) => {
    if (file.type === "folder") {
      router.push(ROUTES.file(file.id));
    }
  };
  const children = filesMock.filter((file) => file.parentId === folderId);

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

export const filesMock: File[] = [
  {
    id: "1",
    isFavorite: false,
    name: "регламент разработки",
    type: "folder",
    parentId: null,
  },
  {
    id: "2",
    isFavorite: true,
    name: "текстовые доки",
    type: "folder",
    parentId: null,
  },
  {
    id: "3",
    isFavorite: true,
    name: "Разработка продукта",
    type: "folder",
    parentId: "1",
  },
  {
    id: "4",
    isFavorite: true,
    name: "Детали проекта",
    type: "folder",
    parentId: "3",
  },
];
