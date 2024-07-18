import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMoviesByCategory, getSerieByCategory } from "../services/services";
import { DashboardType } from "../CategoryDashboard";
import { MoviesCategory, TVCategory } from "../services/types";

export type GetByCategory = {
  category: MoviesCategory | TVCategory;
  page?: number;
};

type MoviesHookProps = {
  category: MoviesCategory | TVCategory;
  type: DashboardType;
  page?: number;
};

export const useCategory = ({ category, type, page }: MoviesHookProps) => {
  const query = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies", category, type, page],
    queryFn: () =>
      type === "movie"
        ? getMoviesByCategory({ category, page })
        : getSerieByCategory({ category, page }),
  });

  if (page && page > 1) {
    query.prefetchQuery({
      queryKey: ["movies", category, type, page - 1],
      queryFn: () =>
        type === "movie"
          ? getMoviesByCategory({ category, page: page - 1 })
          : getSerieByCategory({ category, page: page - 1 }),
    });
  }

  if (page && data?.total_pages && page < data.total_pages) {
    query.prefetchQuery({
      queryKey: ["movies", category, type, page + 1],
      queryFn: () =>
        type === "movie"
          ? getMoviesByCategory({ category, page: page + 1 })
          : getSerieByCategory({ category, page: page + 1 }),
    });
  }

  return { data, isLoading, isError } as const;
};
