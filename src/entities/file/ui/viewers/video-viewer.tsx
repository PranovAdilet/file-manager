"use client";

import { VideoHTMLAttributes } from "react";

type Props = {
  url: string;
} & VideoHTMLAttributes<HTMLVideoElement>;

export const VideoViewer = ({ url, ...props }: Props) => {
  return (
    <div className="size-full flex justify-center items-center">
      <video
        className="size-full max-w-2/3 object-contain"
        src={url}
        controls
        {...props}
      />
    </div>
  );
};
