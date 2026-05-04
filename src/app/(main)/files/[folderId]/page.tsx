import { FilesExplorer } from "@/widgets/files-view";
import { use } from "react";

type Props = {
  params: Promise<{ folderId: string }>;
};

const FolderPage = ({ params }: Props) => {
  const { folderId } = use(params);

  return <FilesExplorer id={folderId} />;
};

export default FolderPage;
