import { CustomLink } from "../../features/ui/CustomLink";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";
import { mainNavigationData } from "./data";
import { useMediaQuery } from "usehooks-ts";

type MainNavigationItemProps = {
  path: string;
  title: (typeof mainNavigationData)[number]["title"];
  icon: string;
};

export const MainNavigationItem = ({
  path,
  title,
  icon,
}: MainNavigationItemProps) => {
  const { t } = useTranslation();
  const matches = useMediaQuery("(max-width:678px)");

  return (
    <li>
      <CustomLink
        type="nav"
        to={path}
        aria-label={t(title)}
        data-tooltip-id={title}
        data-tooltip-content={t(title)}
        data-tooltip-place={matches ? "bottom" : "right"}
      >
        <img
          src={icon}
          alt=""
          width={24}
          height={24}
          className="hover:brightness-101 hover:contrast-102 transition-all hover:hue-rotate-[307deg] hover:invert hover:saturate-0 hover:sepia-0"
        />
      </CustomLink>
      <Tooltip id={title} style={{ zIndex: 9999 }} />
    </li>
  );
};
