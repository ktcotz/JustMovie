import { Outlet } from "react-router";
import { MainNavigation } from "../../layout/MainNavigation/MainNavigation";
import { Welcome } from "../../features/ui/Welcome";

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-primary p-0 sm:p-6 md:grid md:grid-cols-[80px_1fr]">
      <MainNavigation />
      <div className="overflow-x-hidden p-2 pr-0 text-slate-50 sm:p-6">
        <Welcome />
        <Outlet />
      </div>
    </div>
  );
};
