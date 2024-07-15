import { CustomLink } from "../ui/CustomLink";
import { MovieBookmark } from "./MovieBookmark";
import { MovieDescription } from "./MovieDescription";
import { GeneralMovie } from "./schema/MovieSchema";

type MovieProps = {
  inside?: boolean;
};

export const Movie = ({
  id,
  backdrop_path,
  title,
  original_title,
  inside = true,
}: GeneralMovie & MovieProps) => {
  return (
    <>
      <div className="relative overflow-hidden rounded-md transition-all hover:rotate-1">
        <CustomLink to={`${id}`}>
          <div className={`${inside ? "opacity-35" : "opacity-100"}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
              alt={title || original_title}
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
