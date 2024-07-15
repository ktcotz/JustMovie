import { CustomLink } from "../ui/CustomLink";
import { CategoryBookmark } from "./CategoryBookmark";
import { MovieDescription } from "./CategoryDescription";
import { DashboardType } from "./CategoryDashboard";
import { GeneralMovie } from "./schema/CategorySchema";

type MovieProps = {
  inside?: boolean;
  type: DashboardType;
};

export const Category = ({
  id,
  backdrop_path,
  title,
  original_title,
  original_name,
  release_date,
  type,
  inside = true,
}: GeneralMovie & MovieProps) => {
  const description = {
    title,
    release_date,
    original_name,
    type,
  };

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
              <MovieDescription description={description} />
            </div>
          )}
        </CustomLink>
        <CategoryBookmark />
        {!inside && (
          <div className="mt-6">
            <MovieDescription description={description} />
          </div>
        )}
      </div>
    </>
  );
};
