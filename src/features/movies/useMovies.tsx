import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "./services/services";

export const useMovies = () => {
  const { data: trendingMovies, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getTrendingMovies,
  });

  return { trendingMovies, isLoading } as const;
};
