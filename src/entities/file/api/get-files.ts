import { File } from "../model/types";

type GetFiles = {
  parentId?: string | null;
};

export const getFiles = async ({ parentId }: GetFiles) => {
  return parentId
    ? filesMock.filter((file) => file.parentId === parentId)
    : filesMock;
};

export const getFileById = async ({ id }: { id: string }) => {
  return filesMock.find((file) => file.id === id);
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
    url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    id: "6",
    isFavorite: false,
    name: "Прочитай меня",
    type: "md",
    parentId: null,
    content: `# 📁 File Manager Test

## 🧠 Заголовок второго уровня

Это обычный текст с **жирным** и *курсивом*.

---

## 📌 Список файлов

- 📄 document.txt
- 🖼️ image.png
- 🎥 video.mp4
- 📑 report.pdf

---

## 💻 Код

\`\`\`ts
function hello(name: string) {
  return \`Hello, \${name}\`;
}
\`\`\``,
  },
  {
    id: "7",
    isFavorite: false,
    name: "Структура проекта",
    type: "txt",
    parentId: null,
    url: "https://raw.githubusercontent.com/github/gitignore/main/Node.gitignore",
  },
  {
    id: "8",
    isFavorite: false,
    name: "Резюме",
    type: "pdf",
    parentId: null,
    url: "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
  },
  {
    id: "9",
    isFavorite: false,
    name: "Доктор",
    type: "image",
    parentId: null,
    url: "https://avatarko.ru/img/kartinka/1/multfilm_pingviny.jpg",
  },
  {
    id: "10",
    isFavorite: false,
    name: "Доктор",
    type: "video",
    parentId: null,
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];
