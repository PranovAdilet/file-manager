import { getFileAncestors, getFiles } from "@/entities/file";
import { FilesExplorer, FilesHeader } from "@/widgets/file";

type Props = {
  params: Promise<{ folderId: string }>;
};

const FolderPage = async ({ params }: Props) => {
  const { folderId } = await params;

  const [files, breadcrumbs] = await Promise.all([
    getFiles({ parentId: folderId }),
    getFileAncestors(folderId),
  ]);

  return (
    <>
      <FilesHeader breadcrumbs={breadcrumbs} />
      <FilesExplorer id={folderId} intitialFiles={files} />
    </>
  );
};

export default FolderPage;
