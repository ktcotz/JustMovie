import { Spinner } from "../ui/Spinner";
import { useGetIndividual } from "./queries/useGetIndividual";
import { useParamsCategory } from "./queries/useParamsCategory";

export const CategoryOverview = () => {
  const { type, id } = useParamsCategory();
  const { data, isLoading } = useGetIndividual({ external_id: id, type });

  if (isLoading) return <Spinner />;

  console.log(data);

  return <h1>{data?.[0]?.title}</h1>;
};
