import { useTranslation } from "react-i18next";
import { CustomLink } from "../../ui/CustomLink";
import { Wrapper } from "../../ui/Wrapper";
import { RouterRoutes } from "../../../types/routes";

export const Introduction = () => {
  const { t } = useTranslation();

  return (
    <Wrapper type="typography">
      <div className="mb-20 grid place-items-center gap-4 md:mb-32 md:grid-cols-2">
        <picture className="order-1 md:-order-1">
          <source
            srcSet="./images/individual.png"
            media="(max-width:768px)"
            width={709}
            height={457}
          />
          <img
            src="./images/individual.png"
            alt="Just Movie individual movie"
            width={939}
            height={504}
          />
        </picture>
        <div className="text-center text-slate-50 md:text-left">
          <h2 className="mb-8 text-2xl font-medium md:text-3xl">
            {t("introduction.title")}
          </h2>
          <p className="mb-12 text-xl">{t("introduction.description")}</p>
          <div className="flex items-center justify-center gap-4 md:justify-start">
            <CustomLink to={RouterRoutes.LOGIN} type="primary">
              {t("links.watch-free")}
            </CustomLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
