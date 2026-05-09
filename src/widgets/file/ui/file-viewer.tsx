"use client";

import {
  File,
  ImageViewer,
  MdViewer,
  PdfViewer,
  TxtViewer,
  VideoViewer,
} from "@/entities/file";

export const FileViewer = ({ file }: { file?: File }) => {
  switch (file?.type) {
    case "image":
      return <ImageViewer url={file.url!} alt={file.name} />;
    case "md":
      return <MdViewer content={file.content!} />;
    case "pdf":
      return <PdfViewer url={file.url!} />;
    case "txt":
      return <TxtViewer url={file.url!} />;
    case "xml":
      return <TxtViewer url={file.url!} />;
    case "video":
      return <VideoViewer url={file.url!} />;
    default:
      return <div>unknown</div>;
  }
};
