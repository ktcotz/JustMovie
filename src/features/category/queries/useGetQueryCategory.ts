import { useQuery } from "@tanstack/react-query";
import { getCategoryByQuery } from "../services/services";

export type GetByQueryCategory = {
  query: string;
  page: number;
};

export const useGetQueryCategory = ({ query, page }: GetByQueryCategory) => {
  const { data, isLoading } = useQuery({
    queryKey: ["query", query, page],
    queryFn: () => getCategoryByQuery({ query, page }),
  });

  return { data, isLoading } as const;
};
