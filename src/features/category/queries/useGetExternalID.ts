import { useQuery } from "@tanstack/react-query";
import { DashboardType } from "../CategoryDashboard";
import { getExternalID } from "../services/services";

export type GetExternalID = {
  id: number;
  type: DashboardType;
};

export const useGetExternalID = ({ id, type }: GetExternalID) => {
  const { data, isLoading } = useQuery({
    queryKey: ["externalID", id],
    queryFn: () => getExternalID({ id, type }),
  });

  return { data, isLoading } as const;
};
