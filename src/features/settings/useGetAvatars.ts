import { useQuery } from "@tanstack/react-query";
import { getAllAvatars } from "./services/services";

export const useGetAvatars = () => {
  const { data: avatars, isLoading } = useQuery({
    queryKey: ["avatars"],
    queryFn: getAllAvatars,
  });

  return { avatars, isLoading } as const;
};
