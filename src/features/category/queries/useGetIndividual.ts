import { useQuery } from "@tanstack/react-query";
import { getIndividual } from "../services/services";
import { DashboardType } from "../CategoryDashboard";

export type GetIndividualData = {
  external_id: string;
  type: DashboardType;
};

export const useGetIndividual = ({ external_id, type }: GetIndividualData) => {
  const { data, isLoading } = useQuery({
    queryKey: ["individual", external_id],
    queryFn: () => getIndividual({ external_id, type }),
  });

  return { data, isLoading } as const;
};
