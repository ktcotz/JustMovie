import { RouterRoutes } from "../../types/routes";
import { CustomLink } from "./CustomLink";

export const Logo = () => {
  return (
    <CustomLink to={RouterRoutes.HOME} type="logo">
      <img
        src="./images/logo.svg"
        alt="Just Movie"
        width={33}
        height={27}
        title="Just Movie"
      />
      <span className="text-red-500 uppercase text-xl">Just Movie</span>
    </CustomLink>
  );
};
