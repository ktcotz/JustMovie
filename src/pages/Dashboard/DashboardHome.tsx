import { Movie } from "../../features/movies/Movie";
import { Movies } from "../../features/movies/Movies";
import { useMovies } from "../../features/movies/useMovies";
import { Search } from "../../features/ui/SearchInput";

export const DashboardHome = () => {
  const { trendingMovies } = useMovies();
  return (
    <div>
      <Search />
      <div className="relative mb-8 flex flex-col gap-8">
        <Movies />
      </div>
      <span className="mb-8 block h-[1px] w-full bg-slate-700">&nbsp;</span>
      <div>
        <h2 className="mb-8">Recommended for you</h2>
        <div className="grid grid-cols-5 gap-8">
          {trendingMovies?.results.map((movie) => (
            <Movie key={movie.id} {...movie} inside={false} />
          ))}
        </div>
      </div>
    </div>
  );
};
