import { useQuery } from "@tanstack/react-query";
import { getIndividual } from "../services/services";
import { DashboardType } from "../CategoryDashboard";

export type GetIndividualData = {
  id: string;
  type: DashboardType;
};

export const useGetIndividual = ({ id, type }: GetIndividualData) => {
  const { data, isLoading } = useQuery({
    queryKey: ["individual", id],
    queryFn: () => getIndividual({ id, type }),
  });

  return { data, isLoading } as const;
};
