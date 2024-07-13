import { CustomLink } from "../../features/ui/CustomLink";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";
import { mainNavigationData } from "./data";

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

  return (
    <>
      <CustomLink
        type="nav"
        to={path}
        aria-label={t(title)}
        data-tooltip-id={title}
        data-tooltip-content={t(title)}
        data-tooltip-place="right"
      >
        <img
          src={icon}
          alt=""
          width={16}
          height={16}
          className="hover:brightness-101 hover:contrast-102 transition-all hover:hue-rotate-[307deg] hover:invert hover:saturate-0 hover:sepia-0"
        />
      </CustomLink>
      <Tooltip id={title} />
    </>
  );
};
