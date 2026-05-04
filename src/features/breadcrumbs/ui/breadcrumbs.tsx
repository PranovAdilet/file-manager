import Link from "next/link";
import { cn } from "@/shared/lib";
import { File } from "@/entities/file-card";

export const Breadcrumbs = ({ items }: { items: File[] }) => {
  const activeId = items.at(-1)?.id;
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Link href="/" className="hover:opacity-80">
        Файлы
      </Link>

      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-2">
          <span>/</span>

          <Link
            href={`/files/${item.id}`}
            className={cn({
              "hover:opacity-80": item.id !== activeId,
              "cursor-default": item.id === activeId,
            })}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
