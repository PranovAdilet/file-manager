import { File } from "@/entities/file";

export function createBreadcrumbs(
  files: File[],
  currentId: string | null,
): File[] {
  const map = new Map(files.map((f) => [f.id, f]));

  const result: File[] = [];
  let id = currentId;

  while (id) {
    const file = map.get(id);
    if (!file) break;

    result.unshift(file);
    id = file.parentId ?? null;
  }

  return result;
}
