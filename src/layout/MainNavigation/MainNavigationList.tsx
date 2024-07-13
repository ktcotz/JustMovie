import { mainNavigationData } from "./data";
import { MainNavigationItem } from "./MainNavigationItem";

export const MainNavigationList = () => {
  return (
    <ul className="flex list-none items-center justify-center gap-6 sm:gap-8 md:flex-col">
      {mainNavigationData.map((listItem) => (
        <MainNavigationItem {...listItem} key={listItem.id} />
      ))}
    </ul>
  );
};
