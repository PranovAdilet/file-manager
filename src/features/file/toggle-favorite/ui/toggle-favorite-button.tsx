"use client";

import { Button } from "@/shared/ui";
import { Star } from "lucide-react";
import { toggleFavorite } from "../api";
import { useState } from "react";

type Props = {
  id: string;
};

export const ToggleFavoriteButton = ({ id }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleFavorite = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsLoading(true);
    try {
      await toggleFavorite(id);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button loading={isLoading} onClick={handleFavorite} variant="ghost">
      <Star size="20" />
    </Button>
  );
};
