import { getFiles } from "@/entities/file";
import { FilesExplorer } from "@/widgets/files-view";
import { FilesHeader } from "@/widgets/files-view";

export default async function Home() {
  const files = await getFiles({});
  return (
    <>
      <FilesHeader />
      <FilesExplorer intitialFiles={files} />
    </>
  );
}
