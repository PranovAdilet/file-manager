import { getFileById } from "@/entities/file";
import { FileViewer } from "@/widgets/file";

type Props = {
  params: Promise<{ fileId: string }>;
};

const FileViewerPage = async ({ params }: Props) => {
  const { fileId } = await params;

  const file = await getFileById({ id: fileId });

  return (
    <div className="size-full">
      <FileViewer file={file} />
    </div>
  );
};

export default FileViewerPage;
