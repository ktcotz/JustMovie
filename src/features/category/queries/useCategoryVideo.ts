import { useQuery } from "@tanstack/react-query";
import { getVideo } from "../services/services";

export type GetVideoData = {
  id: string;
};

export const useCategoryVideo = ({ id }: GetVideoData) => {
  const { data, isLoading } = useQuery({
    queryKey: ["video", id],
    queryFn: () => getVideo({ id }),
  });

  return { data, isLoading } as const;
};
