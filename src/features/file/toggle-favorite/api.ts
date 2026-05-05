export const toggleFavorite = async (id: string) => {
  return fetch(`/api/files/${id}/favorite`, {
    method: "PATCH",
  });
};
