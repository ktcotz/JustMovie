import { Category } from "./Category";
import { DashboardType } from "./CategoryDashboard";
import { useGetIndividual } from "./queries/useGetIndividual";

type BookmarkProps = {
  custom_id: number;
  type: DashboardType;
};

export const Bookmark = ({ custom_id, type }: BookmarkProps) => {
  const { data } = useGetIndividual({ id: String(custom_id), type });

  if (!data) return null;

  const genre_ids = data.genres.map((genre) => genre.id);

  return (
    <Category
      key={data.id}
      {...data}
      genre_ids={genre_ids}
      type={type}
      poster_path=""
    />
  );
};
