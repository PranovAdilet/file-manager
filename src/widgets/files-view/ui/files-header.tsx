import { ArrowUpFromLine, FilesIcon } from "lucide-react";
import { Breadcrumbs } from "@/features/breadcrumbs";
import { Button } from "@/shared/ui";
import { File } from "@/entities/file";

type Props = {
  breadcrumbs?: File[];
};

export const FilesHeader = ({ breadcrumbs = [] }: Props) => {
  const hasBreadcrumbs = breadcrumbs.length > 0;

  return (
    <div className="flex justify-between items-center w-full">
      {hasBreadcrumbs ? (
        <Breadcrumbs items={breadcrumbs} />
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
