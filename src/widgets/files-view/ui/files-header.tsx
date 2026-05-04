"use client";

import { useParams } from "next/navigation";
import { ArrowUpFromLine, FilesIcon } from "lucide-react";
import { Breadcrumbs, createBreadcrumbs } from "@/features/breadcrumbs";
import { Button } from "@/shared/ui";
import { filesMock } from "./files-explorer";

export const FilesHeader = () => {
  const params = useParams<{ folderId: string }>();
  const currentId = params.folderId;
  const data = createBreadcrumbs(filesMock, currentId);

  return (
    <div className="flex justify-between items-center w-full">
      {currentId ? (
        <Breadcrumbs items={data} />
      ) : (
        <div className="flex items-center gap-3">
          <FilesIcon size="33" />
          <h3 className="font-bold text-2xl">Ваши файлы</h3>
        </div>
      )}

      <div>
        <Button variant="square">
          <ArrowUpFromLine size="16" />
        </Button>
      </div>
    </div>
  );
};
