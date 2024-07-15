import { useQuery } from "@tanstack/react-query";
import { getBookmark } from "../services/services";

export type GetBookmarkData = {
  external_id: string;
};

export const useGetBookmark = ({ external_id }: GetBookmarkData) => {
  const { data, isLoading } = useQuery({
    queryKey: ["bookmark", external_id],
    queryFn: () => getBookmark({ external_id }),
  });

  return { data, isLoading } as const;
};
