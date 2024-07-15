import { MoviesCategory, useMovies } from "./useMovies";
import { Movie } from "./Movie";
import { Spinner } from "../ui/Spinner";
import { CustomLink } from "../ui/CustomLink";

type MoviesProps = {
  title: string;
  category: MoviesCategory;
};

export const Movies = ({ title, category }: MoviesProps) => {
  const { data, isLoading } = useMovies({ category });

  if (isLoading)
    return (
      <div className="flex items-center justify-center p-4">
        <Spinner />
      </div>
    );

  return (
    <div className="relative mb-8 flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-normal text-slate-300">{title}</h2>
        <CustomLink to={`${category}`}>See more</CustomLink>
      </div>
      <div className="grid grid-cols-5 gap-8">
        {data?.results
          .slice(0, 5)
          .map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
};
