import { z } from "zod";

export const VideoSchema = z.object({
  iso_639_1: z.string(),
  name: z.string(),
  key: z.string(),
  site: z.string(),
  size: z.number(),
  type: z.string(),
  official: z.boolean(),
  published_at: z.string(),
  id: z.string(),
});

export const VideoSuccessfulResponseSchema = z.object({
  id: z.number(),
  results: z.array(VideoSchema),
});

export type VideoData = z.infer<typeof VideoSchema>;
export type VideoSuccessfulResponse = z.infer<
  typeof VideoSuccessfulResponseSchema
>;
