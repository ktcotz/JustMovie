import { ReactNode } from "react";
import { Wrapper } from "../features/ui/Wrapper";
import { CustomLink } from "../features/ui/CustomLink";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTranslation } from "react-i18next";
import { RouterRoutes } from "../types/routes";

type HeroProps = {
  children: ReactNode;
};

export const Hero = ({ children }: HeroProps) => {
  const { t } = useTranslation();
  return (
    <header className="relative mb-14 py-8 md:mb-32">
      {children}
      <Wrapper type="typography">
        <div className="grid place-items-center gap-4 md:grid-cols-2">
          <div className="text-center text-slate-50 md:text-left">
            <h1 className="mb-8 text-4xl font-medium md:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mb-20 text-xl">{t("hero.description")}</p>
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <CustomLink to={RouterRoutes.LOGIN} type="primary">
                {t("links.start")}
              </CustomLink>
              <AnchorLink
                href="#info"
                className="rounded-sm bg-slate-900 px-4 py-2 font-semibold text-slate-50 transition hover:bg-slate-800 focus:outline-none focus:ring focus:ring-slate-800 focus:ring-offset-1 focus:ring-offset-primary md:px-8"
              >
                {t("links.more-info")}
              </AnchorLink>
            </div>
          </div>
          <picture>
            <source
              srcSet="./images/hero-small.png"
              media="(max-width:768px)"
              width={709}
              height={457}
            />
            <img
              src="./images/hero.png"
              alt="Just Movie Dashboard"
              width={939}
              height={504}
            />
          </picture>
        </div>
      </Wrapper>
    </header>
  );
};
