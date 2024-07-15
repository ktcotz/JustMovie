import { useParams } from "react-router";
import { z } from "zod";

export const useParamsCategory = () => {
  const { type, id } = useParams();

  const parsed = z
    .object({
      id: z.string(),
      type: z.enum(["movie", "tv"]),
    })
    .parse({ type, id });

  return parsed;
};
