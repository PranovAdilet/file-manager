import { getFiles } from "@/entities/file";
import { FilesExplorer } from "@/widgets/file";
import { FilesHeader } from "@/widgets/file";

export default async function Home() {
  const files = await getFiles({});
  return (
    <>
      <FilesHeader />
      <FilesExplorer intitialFiles={files} />
    </>
  );
}
