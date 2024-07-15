import { MoviesTitle } from "../../../lib/i18n/i18n.types";
import { MoviesCategory } from "../useMovies";

type MovieDashboard = {
  id: number;
  title: MoviesTitle;
  category: MoviesCategory;
};

export const moviesDashboardData: MovieDashboard[] = [
  {
    id: 1,
    title: "movies.recommended",
    category: "recommended",
  },
  {
    id: 2,
    title: "movies.top",
    category: "top_rated",
  },
  {
    id: 3,
    title: "movies.upcoming",
    category: "upcoming",
  },
  {
    id: 4,
    title: "movies.horror",
    category: "horror",
  },
  {
    id: 5,
    title: "movies.comedy",
    category: "comedy",
  },
  {
    id: 6,
    title: "movies.war",
    category: "war",
  },
  {
    id: 7,
    title: "movies.animation",
    category: "animation",
  },
  {
    id: 8,
    title: "movies.fantasy",
    category: "fantasy",
  },
  {
    id: 9,
    title: "movies.romance",
    category: "romance",
  },
] as const;
