import { z } from "zod";

export const GeneralMovieSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  media_type: z.string().optional(),
  original_language: z.string(),
  original_title: z.string().optional(),
  original_name: z.string().optional(),
  origin_country: z.array(z.string()).optional(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  release_date: z.string().optional(),
  title: z.string().optional(),
  video: z.boolean().optional(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const GeneralMovieSuccessfulResponseSchema = z.object({
  page: z.number(),
  results: z.array(GeneralMovieSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type GeneralMovie = z.infer<typeof GeneralMovieSchema>;
export type GeneralMovieSuccessfulResponse = z.infer<
  typeof GeneralMovieSuccessfulResponseSchema
>;
