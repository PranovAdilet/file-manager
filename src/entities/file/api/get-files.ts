import { File } from "../model/types";

type GetFiles = {
  parentId?: string | null;
};

export const getFiles = async ({ parentId }: GetFiles) => {
  return parentId
    ? filesMock.filter((file) => file.parentId === parentId)
    : filesMock;
};

export const getFileAncestors = async (folderId: string) => {
  const map = new Map(filesMock.map((file) => [file.id, file]));
  const result: File[] = [];
  let currentId: string | null = folderId;

  while (currentId) {
    const currentFile = map.get(currentId);
    if (!currentFile) break;

    result.unshift(currentFile);
    currentId = currentFile.parentId ?? null;
  }

  return result;
};

const filesMock: File[] = [
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
  {
    id: "5",
    isFavorite: true,
    name: "Resume",
    type: "pdf",
    parentId: "3",
  },
  {
    id: "6",
    isFavorite: false,
    name: "Прочитай меня",
    type: "md",
    parentId: null,
  },
  {
    id: "7",
    isFavorite: false,
    name: "Структура проекта",
    type: "txt",
    parentId: null,
  },
  {
    id: "8",
    isFavorite: false,
    name: "Резюме",
    type: "pdf",
    parentId: null,
  },
];
