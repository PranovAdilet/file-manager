export type FileType = "folder" | "pdf" | "txt" | "md" | "xml";

export type File = {
  id: string;
  name: string;
  type: FileType;

  isFavorite: boolean;
  size?: number;

  createdAt?: number;
  updatedAt?: number;

  children?: File[];
};
