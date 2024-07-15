import { Category } from "./Category";
import { DashboardType } from "./CategoryDashboard";
import { useGetIndividual } from "./queries/useGetIndividual";

type BookmarkProps = {
  external_id: string;
  custom_id: number;
  type: DashboardType;
};

export const Bookmark = ({ external_id, type }: BookmarkProps) => {
  const { data } = useGetIndividual({ external_id, type });

  console.log(data);

  return data?.map((movie) => (
    <Category key={movie.id} {...movie} type={type} />
  ));
};
