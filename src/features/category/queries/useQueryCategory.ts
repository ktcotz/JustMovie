import { useSearchParams } from "react-router-dom";
import { z } from "zod";

export const useQueryCategory = () => {
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page");
  const query = searchParams.get("query");

  const parsed = z
    .object({
      page: z.string().transform((val) => (Number(val) < 0 ? 1 : Number(val))),
      query: z.string(),
    })
    .safeParse({ page, query });

  return parsed.success ? parsed.data : null;
};
