import { MoviesCategory } from "../useMovies";

type MovieDashboard = {
  id: number;
  title: string;
  category: MoviesCategory;
};

export const moviesDashboardData: MovieDashboard[] = [
  {
    id: 1,
    title: "Recommended",
    category: "recommended",
  },
  {
    id: 2,
    title: "Top Rated",
    category: "top_rated",
  },
  {
    id: 3,
    title: "Upcoming",
    category: "upcoming",
  },
  {
    id: 4,
    title: "Horror",
    category: "horror",
  },
  {
    id: 5,
    title: "Comedy",
    category: "comedy",
  },
  {
    id: 6,
    title: "War",
    category: "war",
  },
  {
    id: 7,
    title: "Animation",
    category: "animation",
  },
  {
    id: 8,
    title: "Fantasy",
    category: "fantasy",
  },
  {
    id: 9,
    title: "Romance",
    category: "romance",
  },
];
