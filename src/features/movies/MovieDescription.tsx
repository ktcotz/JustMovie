import { useTranslation } from "react-i18next";
import { DashboardType } from "./MoviesDashboard";

type MovieDescriptionProps = {
  description: {
    title?: string;
    release_date?: string;
    original_name?: string;
    type: DashboardType;
  };
};

export const MovieDescription = ({
  description: { title, original_name, type, release_date },
}: MovieDescriptionProps) => {
  const { t } = useTranslation();

  const media_type =
    type === "movie" || !type ? t("movies.movie") : t("movies.tv-serie");

  return (
    <>
      <ul className="flex items-center gap-2 text-sm text-slate-200">
        {release_date && (
          <>
            <li>{new Date(release_date).getFullYear()}</li>
            <li className="h-1 w-1 rounded-full bg-slate-500">&nbsp;</li>
          </>
        )}

        <li className="flex items-center gap-2">
          <img src={`./images/icon-category-${media_type}.svg`} alt="" />
          <span>{media_type}</span>
        </li>
        <li className="h-1 w-1 rounded-full bg-slate-500">&nbsp;</li>
        <p>{t("movies.who")}</p>
      </ul>
      <h2 className="text-xl lg:text-2xl">{title || original_name}</h2>
    </>
  );
};
