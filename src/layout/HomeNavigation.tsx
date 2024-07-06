import { CustomLink } from "../features/ui/CustomLink";
import { Logo } from "../features/ui/Logo";
import { Wrapper } from "../features/ui/Wrapper";
import { RouterRoutes } from "../types/routes";

export const HomeNavigation = () => {
  return (
    <Wrapper>
      <header className="h-14 py-8">
        <nav className="flex items-center">
          <Logo />
          <div className="ml-auto">
            <CustomLink to={RouterRoutes.LOGIN} type="primary">
              Zaloguj się
            </CustomLink>
          </div>
        </nav>
      </header>
    </Wrapper>
  );
};
