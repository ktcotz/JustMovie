import { moviesDashboardData } from "./data/movie-data";
import { tvDashboardData } from "./data/tv-data";
import { Movies } from "./Movies";

export type DashboardType = "tv" | "movie";

type MoviesDashboardType = {
  type?: DashboardType;
};

export const MoviesDashboard = ({ type = "movie" }: MoviesDashboardType) => {
  const dashboardData =
    type === "movie" ? moviesDashboardData : tvDashboardData;

  return (
    <div className="flex flex-col gap-2">
      {dashboardData.map((movies) => (
        <Movies key={movies.id} type={type} {...movies} />
      ))}
    </div>
  );
};
