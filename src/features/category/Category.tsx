import { CustomLink } from "../ui/CustomLink";
import { CategoryBookmark } from "./CategoryBookmark";
import { MovieDescription } from "./CategoryDescription";
import { DashboardType } from "./CategoryDashboard";
import { Category as CategoryData } from "./schema/CategorySchema";

type MovieProps = {
  inside?: boolean;
  type: DashboardType;
};

export const Category = ({
  id,
  backdrop_path,
  title,
  original_name,
  release_date,
  type,
  inside = true,
}: CategoryData & MovieProps) => {
  const description = {
    title,
    release_date,
    original_name,
    type,
  };

  const image = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;

  return (
    <>
      <div className="relative overflow-hidden rounded-md transition-all hover:rotate-1">
        <CustomLink to={`/dashboard/${type}/${id}`}>
          <img
            width={500}
            height={281}
            alt={title ?? `${type} - ${original_name}`}
            src={image}
            className={`${inside ? "opacity-35" : "opacity-100"}`}
          />

          {inside && (
            <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4">
              <MovieDescription description={description} />
            </div>
          )}
        </CustomLink>
        <CategoryBookmark id={id} type={type} />
        {!inside && (
          <div className="mt-6">
            <MovieDescription description={description} />
          </div>
        )}
      </div>
    </>
  );
};
