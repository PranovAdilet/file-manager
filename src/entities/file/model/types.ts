export type FileType =
  | "folder"
  | "pdf"
  | "txt"
  | "md"
  | "xml"
  | "image"
  | "video";

type BaseFile = {
  id: string;
  name: string;
  isFavorite: boolean;
  size?: number;
  createdAt?: number;
  updatedAt?: number;
  parentId: string | null;
};

type FolderFile = BaseFile & {
  type: "folder";
};

type MediaFile = BaseFile & {
  type: "image" | "video";
  url: string;
};

type MdFile = BaseFile & {
  type: "md";
  content: string;
};

type DocumentFile = BaseFile & {
  type: "pdf" | "txt" | "xml";
  url?: string;
};

export type File = FolderFile | MediaFile | DocumentFile | MdFile;
