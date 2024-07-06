import { CustomLink } from "../features/ui/CustomLink";
import { LanguageSwitcher } from "../features/ui/LanguageSwitcher";
import { Logo } from "../features/ui/Logo";
import { Wrapper } from "../features/ui/Wrapper";
import { RouterRoutes } from "../types/routes";

export const HomeNavigation = () => {
  return (
    <Wrapper>
      <header className="h-14 py-8">
        <nav className="flex flex-col items-center gap-8 md:flex-row">
          <Logo />
          <div className="flex flex-wrap items-center gap-4 md:ml-auto">
            <LanguageSwitcher />
            <CustomLink to={RouterRoutes.LOGIN} type="primary">
              Zaloguj się
            </CustomLink>
          </div>
        </nav>
      </header>
    </Wrapper>
  );
};
