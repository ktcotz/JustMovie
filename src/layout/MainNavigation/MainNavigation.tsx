import { Logo } from "../../features/ui/Logo";
import { MainNavigationList } from "./MainNavigationList";

export const MainNavigation = () => {
  return (
    <div className="h-[700px] rounded-2xl bg-slate-800 py-6">
      <div className="mb-16 flex items-center justify-center">
        <Logo shouldTextBeVisible={false} />
      </div>
      <MainNavigationList />
    </div>
  );
};
