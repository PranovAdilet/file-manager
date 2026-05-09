"use client";

import { useEffect, useState } from "react";

type Props = {
  url: string;
};

export const PdfViewer = ({ url }: Props) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    const check = async () => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        if (!res.ok) setError(true);
      } catch {
        setError(true);
      }
    };

    check();
  }, [url]);

  if (error) {
    return (
      <div className="size-full flex justify-center items-center">
        Ошибка загрузки PDF
      </div>
    );
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        src={url}
        width="100%"
        height="100%"
        title="PDF Viewer"
        onLoad={() => console.log("loaded")}
      />
    </div>
  );
};
