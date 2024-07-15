import { useQuery } from "@tanstack/react-query";
import { getBookmarks } from "../services/services";

export const useGetBookmarks = () => {
  const { data: bookmarks, isLoading } = useQuery({
    queryKey: ["bookmarks"],
    queryFn: getBookmarks,
  });

  return { bookmarks, isLoading } as const;
};
