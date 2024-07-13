import { Outlet } from "react-router";
import { MainNavigation } from "../layout/MainNavigation/MainNavigation";

export const Dashboard = () => {
  return (
    <div className="grid min-h-screen grid-cols-[80px_1fr] bg-primary p-6">
      <MainNavigation />
      <div className="text-cyan-50">
        <Outlet />
      </div>
    </div>
  );
};
