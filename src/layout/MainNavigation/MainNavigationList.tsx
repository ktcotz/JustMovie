import { mainNavigationData } from "./data";
import { MainNavigationItem } from "./MainNavigationItem";

export const MainNavigationList = () => {
  return (
    <ul className="flex list-none flex-col items-center justify-center gap-8">
      {mainNavigationData.map((listItem) => (
        <MainNavigationItem {...listItem} key={listItem.id} />
      ))}
    </ul>
  );
};
