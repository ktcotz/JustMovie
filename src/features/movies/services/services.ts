import toast from "react-hot-toast";

import { GetMovieByCategory } from "../useMovies";
import { MOVIES_API_CONFIG_ROUTES } from "./config";
import { GeneralMovieSuccessfulResponseSchema } from "../schema/MovieSchema";

export const getMoviesByCategory = async ({ category }: GetMovieByCategory) => {
  try {
    const res = await fetch(MOVIES_API_CONFIG_ROUTES[category], {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Error : ${res.statusText}`);
    }

    const data = await res.json();

    const parsedData = GeneralMovieSuccessfulResponseSchema.parse(data);

    return parsedData;
  } catch (err) {
    if (err instanceof Error) {
      toast.error(err.message);
    }
  }
};
