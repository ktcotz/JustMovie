import { MoviesDashboard } from "../../features/movies/MoviesDashboard";
import { TrendingMovies } from "../../features/movies/TrendingMovies";
import { Search } from "../../features/ui/SearchInput";

export const DashboardHome = () => {
  return (
    <div>
      <Search />
      <TrendingMovies />
      <span className="mb-8 block h-[1px] w-full bg-slate-700">&nbsp;</span>
      <MoviesDashboard />
    </div>
  );
};
