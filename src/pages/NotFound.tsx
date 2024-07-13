import { useTranslation } from "react-i18next";
import { Logo } from "../features/ui/Logo";
import { CustomLink } from "../features/ui/CustomLink";
import { RouterRoutes } from "../types/routes";

export const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-primary p-4">
      <Logo />
      <div className="max-w-[400px] rounded-md bg-slate-800 p-6 text-center text-slate-50">
        <h1 className="mb-4 text-2xl">{t("wrong.title")}</h1>
        <p className="mb-8">{t("wrong.description")}</p>
        <CustomLink to={RouterRoutes.HOME} type="primary">
          {t("links.back")}
        </CustomLink>
      </div>
    </div>
  );
};
