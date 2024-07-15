import { MoviesCategory, useMovies } from "./useMovies";
import { Movie } from "./Movie";
import { Spinner } from "../ui/Spinner";
import { CustomLink } from "../ui/CustomLink";
import { useMediaQuery } from "usehooks-ts";
import { Wrapper } from "../ui/Wrapper";
import { moviesDashboardData } from "./data/data";
import { useTranslation } from "react-i18next";

type MoviesProps = {
  title: (typeof moviesDashboardData)[number]["title"];
  category: MoviesCategory;
};

export const Movies = ({ title, category }: MoviesProps) => {
  const { data, isLoading } = useMovies({ category });
  const { t } = useTranslation();
  const matches = useMediaQuery("(max-width:1280px)");

  if (isLoading)
    return (
      <div className="flex items-center justify-center p-4">
        <Spinner />
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
        <CustomLink to={`movie/${category}`} type="more">
          {t("links.more")}
        </CustomLink>
      </div>
      <Wrapper type="movies">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
          {data?.results
            .slice(MIN_RESULTS_LENGTH, MAX_RESULTS_LENGTH)
            .map((movie) => <Movie key={movie.id} {...movie} inside={false} />)}
        </div>
      </Wrapper>
    </div>
  );
};
