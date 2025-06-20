import { useCategory } from "./queries/useCategory";
import { Category } from "./Category";
import { CustomLink } from "../ui/CustomLink";
import { useMediaQuery } from "usehooks-ts";
import { Wrapper } from "../ui/Wrapper";
import { moviesDashboardData } from "./data/movie-data";
import { useTranslation } from "react-i18next";
import { DashboardType } from "./CategoryDashboard";
import { MoviesCategory, TVCategory } from "./services/types";
import { MovieSkeleton } from "./MovieSkeleton";

type MoviesProps = {
  title: (typeof moviesDashboardData)[number]["title"];
  category: MoviesCategory | TVCategory;
  type: DashboardType;
};

export const Movies = ({ title, category, type }: MoviesProps) => {
  const { data, isLoading } = useCategory({ category, type });
  const { t } = useTranslation();
  const matches = useMediaQuery("(max-width:1280px)");

  if (isLoading)
    return (
      <div className="flex items-center justify-center space-x-8 p-4">
        <MovieSkeleton />
      </div>
    );

  const MIN_RESULTS_LENGTH = 0;
  const MAX_RESULTS_LENGTH = matches ? 6 : 4;

  return (
    <div className="relative mb-8 flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-normal text-slate-300 sm:text-3xl">
          {t(title)}
        </h2>
        <CustomLink
          to={`/dashboard/${category}?type=${type}&page=1`}
          type="more"
        >
          {t("links.more")}
        </CustomLink>
      </div>
      <Wrapper type="movies">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
          {data?.results
            .slice(MIN_RESULTS_LENGTH, MAX_RESULTS_LENGTH)
            .map((movie) => (
              <Category key={movie.id} {...movie} inside={false} type={type} />
            ))}
        </div>
      </Wrapper>
    </div>
  );
};
