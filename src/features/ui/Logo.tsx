import { RouterRoutes } from "../../types/routes";
import { CustomLink } from "./CustomLink";

type LogoProps = {
  shouldTextBeVisible?: boolean;
};

export const Logo = ({ shouldTextBeVisible = true }: LogoProps) => {
  return (
    <CustomLink to={RouterRoutes.HOME} type="logo">
      <img
        src="/images/logo.svg"
        alt=""
        width={33}
        height={27}
        title="Just Movie"
      />
      {shouldTextBeVisible && (
        <span className="text-xl uppercase text-red-500">Just Movie</span>
      )}
    </CustomLink>
  );
};
