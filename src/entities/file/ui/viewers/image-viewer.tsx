"use client";

import Image, { ImageProps } from "next/image";

type Props = {
  url: string;
  alt: string;
} & Omit<ImageProps, "src" | "alt">;

export const ImageViewer = ({ url, alt, ...props }: Props) => {
  return (
    <Image
      className="size-full object-contain"
      src={url}
      alt={alt}
      {...props}
      width={300}
      height={300}
    />
  );
};
