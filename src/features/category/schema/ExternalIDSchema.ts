import { z } from "zod";
import { CategorySchema } from "./CategorySchema";

export const ExternalIDSchema = z.object({
  id: z.number(),
  imdb_id: z.string().nullable(),
  wikidata_id: z.string().nullable(),
  facebook_id: z.string().nullable(),
  instagram_id: z.string().nullable(),
  twitter_id: z.string().nullable(),
});

export const ExternalIDSuccesfulSchema = z.object({
  tv_results: z.array(CategorySchema),
  movie_results: z.array(CategorySchema),
});

export type ExternalIDSSuccesful = z.infer<typeof ExternalIDSuccesfulSchema>;

export type ExternalID = z.infer<typeof ExternalIDSchema>;
