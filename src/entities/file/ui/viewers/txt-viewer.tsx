"use client";

import { useEffect, useState } from "react";

type Props = {
  url: string;
};

export const TxtViewer = ({ url }: Props) => {
  const [content, setContent] = useState("");
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error("Failed to load file");
        return r.text();
      })
      .then((text) => {
        setContent(text);
      })
      .catch((e) => {
        if (e.name !== "AbortError") {
          setError(e.message);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [url]);

  if (loading)
    return (
      <div className="size-full flex justify-center items-center">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="size-full flex justify-center items-center text-red-500">
        Error: {error}
      </div>
    );

  return <pre className="whitespace-pre-wrap p-4">{content}</pre>;
};
