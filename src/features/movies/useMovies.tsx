import { useQuery } from "@tanstack/react-query";
import { getMoviesByCategory, getSerieByCategory } from "./services/services";
import { DashboardType } from "./MoviesDashboard";
import { MoviesCategory, TVCategory } from "./services/types";


export type GetByCategory = {
  category: MoviesCategory | TVCategory;
};

type MoviesHookProps = {
  category: MoviesCategory | TVCategory;
  type: DashboardType;
};

export const useMovies = ({ category, type }: MoviesHookProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ["movies", category, type],
    queryFn: () =>
      type === "movie"
        ? getMoviesByCategory({ category })
        : getSerieByCategory({ category }),
  });

  return { data, isLoading } as const;
};
