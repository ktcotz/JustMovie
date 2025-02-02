import { CategoryDashboard } from "../../features/category/CategoryDashboard";

export const DashboardMovies = () => {
  return (
    <div>
      <span className="mb-8 block h-[1px] w-full bg-slate-700">&nbsp;</span>
      <div className="pr-3 sm:pr-0">
        <CategoryDashboard />
      </div>
    </div>
  );
};
