import { Outlet } from "react-router";
import { MainNavigation } from "../layout/MainNavigation/MainNavigation";

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-primary p-0 sm:p-6 md:grid md:grid-cols-[80px_1fr]">
      <MainNavigation />
      <div className="text-cyan-50">
        <Outlet />
      </div>
    </div>
  );
};
