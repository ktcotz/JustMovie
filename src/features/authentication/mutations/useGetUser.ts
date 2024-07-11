import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/services";

export const useGetUser = () => {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return {
    isLoading,
    user,
    isAuthenticated: user?.role === "authenticated",
  } as const;
};
