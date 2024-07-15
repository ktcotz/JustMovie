import { useQuery } from "@tanstack/react-query";
import { getMoviesByCategory } from "./services/services";

export type MoviesCategory =
  | "trending"
  | "recommended"
  | "top_rated"
  | "upcoming"
  | "horror"
  | "comedy"
  | "war"
  | "animation"
  | "fantasy"
  | "romance";

export enum MoviesType {
  ACTION = 28,
  ADVENTURE = 12,
  ANIMATION = 16,
  COMEDY = 35,
  CRIME = 80,
  DOCUMENTARY = 99,
  DRAMA = 18,
  FAMILY = 10751,
  FANTASY = 14,
  HISTORY = 36,
  HORROR = 27,
  MUSIC = 10402,
  MYSTERY = 9648,
  ROMANCE = 10749,
  TV_MOVIE = 10770,
  THRILLER = 53,
  WAR = 10752,
  WESTERN = 37,
}

export type GetMovieByCategory = {
  category: MoviesCategory;
};

export const useMovies = ({ category }: GetMovieByCategory) => {
  const { data, isLoading } = useQuery({
    queryKey: ["movies", category],
    queryFn: () => getMoviesByCategory({ category }),
  });

  return { data, isLoading } as const;
};
