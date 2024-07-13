import { Avatar } from "../../features/ui/avatar/Avatar";
import { Logo } from "../../features/ui/Logo";
import { MainNavigationList } from "./MainNavigationList";

export const MainNavigation = () => {
  return (
    <div className="flex items-center justify-between gap-8 rounded-2xl bg-slate-800 px-6 py-6 md:h-[700px] md:flex-col md:justify-normal md:gap-0 md:px-0">
      <div className="flex items-center justify-center md:mb-16">
        <Logo shouldTextBeVisible={false} />
      </div>
      <MainNavigationList />
      <div className="mt-auto">
        <Avatar />
      </div>
    </div>
  );
};
