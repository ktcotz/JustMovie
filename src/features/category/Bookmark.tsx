import { Category } from "./Category";
import { DashboardType } from "./CategoryDashboard";
import { useGetBookmark } from "./queries/useGetBookmark";

type BookmarkProps = {
  external_id: string;
  custom_id: number;
  type: DashboardType;
};

export const Bookmark = ({ external_id, type }: BookmarkProps) => {
  const { data } = useGetBookmark({ external_id });

  const result = type === "movie" ? data?.movie_results : data?.tv_results;

  return result?.map((movie) => (
    <Category key={movie.id} {...movie} type={type} />
  ));
};
