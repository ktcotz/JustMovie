import { useTranslation } from "react-i18next";
import { CustomLink } from "../features/ui/CustomLink";
import { LanguageSwitcher } from "../features/ui/LanguageSwitcher";
import { Logo } from "../features/ui/Logo";
import { Wrapper } from "../features/ui/Wrapper";
import { RouterRoutes } from "../types/routes";

export const HomeNavigation = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <nav className="mb-20 flex flex-col items-center gap-8 md:flex-row">
        <Logo />
        <div className="flex flex-wrap items-center gap-4 md:ml-auto">
          <LanguageSwitcher />
          <CustomLink to={RouterRoutes.LOGIN} type="primary">
            {t("links.log-in")}
          </CustomLink>
        </div>
      </nav>
    </Wrapper>
  );
};
