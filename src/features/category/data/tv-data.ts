import { MoviesTitle } from "../../../lib/i18n/i18n.types";
import { TVCategory } from "../services/types";

type TvDashboard = {
  id: number;
  title: MoviesTitle;
  category: TVCategory;
};

export const tvDashboardData: TvDashboard[] = [
  {
    id: 1,
    title: "movies.recommended",
    category: "trending",
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
    title: "movies.drama",
    category: "drama",
  },
  {
    id: 5,
    title: "movies.comedy",
    category: "comedy",
  },
  {
    id: 6,
    title: "movies.kids",
    category: "kids",
  },
  {
    id: 7,
    title: "movies.animation",
    category: "animation",
  },
  {
    id: 8,
    title: "movies.mystery",
    category: "mystery",
  },
  {
    id: 9,
    title: "movies.family",
    category: "family",
  },
] as const;
