import { z } from "zod";

export const TrendingMoviesSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  media_type: z.string(),
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

export const TrendingMovieSuccessfullResponseSchema = z.object({
  page: z.number(),
  results: z.array(TrendingMoviesSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type TrendingMovie = z.infer<typeof TrendingMoviesSchema>;
export type TrendingMovieSuccessfullResponse = z.infer<
  typeof TrendingMovieSuccessfullResponseSchema
>;
