import { useTranslation } from "react-i18next";
import { CustomLink } from "../ui/CustomLink";
import { Spinner } from "../ui/Spinner";
import { Tag } from "../ui/Tag";
import { Wrapper } from "../ui/Wrapper";
import { CategoryRating } from "./CategoryRating";
import { useGetIndividual } from "./queries/useGetIndividual";
import { useParamsCategory } from "./queries/useParamsCategory";
import { useCategoryVideo } from "./queries/useCategoryVideo";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { RouterRoutes } from "../../types/routes";

export const CategoryOverview = () => {
  const { type, id } = useParamsCategory();
  const navigate = useNavigate();
  const { data: category, isLoading } = useGetIndividual({ id, type });
  const { data: video } = useCategoryVideo({ id });
  const { t } = useTranslation();

  useEffect(() => {
    if (category === undefined && !isLoading) {
      navigate(RouterRoutes.DASHBOARD);
    }
  }, [category, navigate, isLoading]);

  if (isLoading) return <Spinner />;
  if (!category) return null;

  const image = `https://image.tmdb.org/t/p/original${category.backdrop_path}`;

  const genres_ids = category!.genres.map((genre) => genre.id);
  const validTagline = !category!.tagline.startsWith("http");

  return (
    <Wrapper>
      <div className="grid gap-8 md:grid-cols-2">
        <div
          className={`relative h-[200px] w-full justify-self-center rounded-md bg-cover bg-center sm:h-[350px] sm:w-3/5 md:h-[530px] md:w-full lg:w-4/5`}
          style={{ backgroundImage: `url(${image})` }}
        >
          &nbsp;
        </div>

        <div>
          <h1 className="mb-3 text-center text-3xl md:text-left md:text-5xl">
            {category.title ||
              category.original_title ||
              category.original_name}
          </h1>
          {validTagline && (
            <p className="mb-6 text-slate-400">{category.tagline}</p>
          )}
          {video && video.results.length > 0 && (
            <CustomLink
              to={`video?id=${id}`}
              aria-label="Check video"
              type="video"
            >
              <img src="./../../images/icon-play.svg" alt="" />
            </CustomLink>
          )}
          <div className="mb-6">
            <CategoryRating vote_average={category.vote_average} />
          </div>
          <div className="mb-6 grid grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="font-medium text-slate-400">
                {t("overview.year")}
              </h2>
              <p className="font-bold text-slate-50">
                {category.release_date
                  ? new Date(category.release_date).getFullYear()
                  : 2024}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-medium text-slate-400">
                {t("overview.language")}
              </h2>
              <p className="font-bold text-slate-50">
                {category.original_language === "en"
                  ? t("overview.english")
                  : t("overview.polish")}
              </p>
            </div>
            {category.runtime && (
              <div className="flex flex-col gap-2">
                <h2 className="font-medium text-slate-400">
                  {t("overview.length")}
                </h2>
                <p className="font-bold text-slate-50">{category.runtime}min</p>
              </div>
            )}
            {category.number_of_seasons && (
              <div className="flex flex-col gap-2">
                <h2 className="font-medium text-slate-400">
                  {t("overview.length")}
                </h2>
                <p className="font-bold text-slate-50">
                  {category.number_of_seasons} seasons
                </p>
              </div>
            )}
          </div>
          <div className="mb-12">
            <h2 className="mb-4 font-medium text-slate-50">
              {t("overview.genres")}
            </h2>
            <div className="flex items-center gap-2">
              {genres_ids.map((id) => (
                <Tag key={id} id={id} type={type} />
              ))}
            </div>
          </div>
          {category.overview && (
            <div>
              <h2 className="mb-4 font-medium text-slate-50">
                {t("overview.synopsis")}
              </h2>
              <p>{category.overview}</p>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
