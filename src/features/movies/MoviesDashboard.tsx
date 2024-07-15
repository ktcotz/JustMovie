import { moviesDashboardData } from "./data/data";
import { Movies } from "./Movies";

export const MoviesDashboard = () => {
  return (
    <div className="flex flex-col gap-2">
      {moviesDashboardData.map((movies) => (
        <Movies key={movies.id} {...movies} />
      ))}
    </div>
  );
};
