import { CustomLink } from "../ui/CustomLink";
import { MovieBookmark } from "./MovieBookmark";
import { MovieDescription } from "./MovieDescription";
import { TrendingMovie } from "./schema/MovieSchema";

type MovieProps = {
  inside?: boolean;
};

export const Movie = ({
  id,
  backdrop_path,
  title,
  inside = true,
}: TrendingMovie & MovieProps) => {
  return (
    <>
      <div className="relative overflow-hidden rounded-md">
        <CustomLink to={`${id}`}>
          <div className={`${inside ? "opacity-45" : "opacity-100"}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
              alt={title}
              width={500}
              height={281}
            />
          </div>
          {inside && (
            <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4">
              <MovieDescription />
            </div>
          )}
        </CustomLink>
        <MovieBookmark />
        {!inside && (
          <div className="mt-6">
            <MovieDescription />
          </div>
        )}
      </div>
    </>
  );
};
