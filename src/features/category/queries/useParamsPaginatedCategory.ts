import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

export const useUrlPaginatedCategory = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type");
  const page = searchParams.get("page");

  const parsed = z
    .object({
      category: z.union([
        z.union([
          z.literal("trending"),
          z.literal("recommended"),
          z.literal("top_rated"),
          z.literal("upcoming"),
          z.literal("horror"),
          z.literal("comedy"),
          z.literal("war"),
          z.literal("animation"),
          z.literal("fantasy"),
          z.literal("romance"),
        ]),
        z.union([
          z.literal("trending"),
          z.literal("recommended"),
          z.literal("top_rated"),
          z.literal("upcoming"),
          z.literal("drama"),
          z.literal("comedy"),
          z.literal("kids"),
          z.literal("animation"),
          z.literal("mystery"),
          z.literal("family"),
        ]),
      ]),
      page: z.string().transform((val) => (Number(val) < 0 ? 1 : Number(val))),
      type: z.enum(["movie", "tv"]),
    })
    .safeParse({ category, page, type });

  return parsed.success ? parsed.data : null;
};
