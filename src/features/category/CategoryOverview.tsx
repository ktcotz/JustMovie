import { useTranslation } from "react-i18next";
import { CustomLink } from "../ui/CustomLink";
import { Spinner } from "../ui/Spinner";
import { Tag } from "../ui/Tag";
import { Wrapper } from "../ui/Wrapper";
import { CategoryRating } from "./CategoryRating";
import { useGetIndividual } from "./queries/useGetIndividual";
import { useParamsCategory } from "./queries/useParamsCategory";

export const CategoryOverview = () => {
  const { type, id } = useParamsCategory();
  const { data, isLoading } = useGetIndividual({ external_id: id, type });
  const { t } = useTranslation();

  if (isLoading) return <Spinner />;

  if (!data) return null;

  const category = data[0];

  const image = `https://image.tmdb.org/t/p/original${category.backdrop_path}`;

  return (
    <Wrapper>
      <div className="grid gap-8 md:grid-cols-2">
        <div
          className={`relative h-[200px] w-full justify-self-center rounded-md bg-cover bg-center sm:h-[350px] sm:w-3/5 md:h-[530px] md:w-full lg:w-4/5`}
          style={{ backgroundImage: `url(${image})` }}
        >
          {category.video && (
            <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/90">
              <CustomLink to="video" aria-label="Check video">
                <img src="./../../images/icon-play.svg" alt="" />
              </CustomLink>
            </div>
          )}
        </div>

        <div>
          <h1 className="mb-3 text-center text-3xl md:text-left md:text-5xl">
            {category.title ||
              category.original_title ||
              category.original_name}
          </h1>
          <p className="mb-6 text-slate-400">
            {t("overview.popularity")} - {category.popularity}
          </p>
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
            <div className="flex flex-col gap-2">
              <h2 className="font-medium text-slate-400">
                {t("overview.length")}
              </h2>
              <p className="font-bold text-slate-50">N/A</p>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 font-medium text-slate-50">
              {t("overview.genres")}
            </h2>
            <div className="flex items-center gap-2">
              {category.genre_ids.map((id) => (
                <Tag id={id} type={category.media_type} />
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
