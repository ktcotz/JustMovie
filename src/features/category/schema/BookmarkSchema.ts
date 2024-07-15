import { z } from "zod";
import { CategorySchema } from "./CategorySchema";

export const BookmarkSchema = z.object({
  type: z.enum(["movie", "tv"]),
  external_id: z.string(),
  custom_id: z.number(),
});

export const BookmarkSupabaseSchema = z.array(
  z.intersection(
    z.object({
      id: z.number(),
      created_at: z.string(),
    }),
    BookmarkSchema,
  ),
);

export const BookmarkFindSchema = z.object({
  movie_results: z.array(CategorySchema),
  tv_results: z.array(CategorySchema),
});

export type BookmarkSupabase = z.infer<typeof BookmarkSupabaseSchema>;
export type BookmarkFind = z.infer<typeof BookmarkFindSchema>;
