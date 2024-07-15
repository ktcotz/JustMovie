import toast from "react-hot-toast";

import { GetByCategory } from "../useCategory";
import { MOVIES_API_CONFIG_ROUTES, SERIES_API_CONFIG_ROUTES } from "./config";
import { CategoryResponseSuccessfulSchema } from "../schema/CategorySchema";
import { MoviesCategory, TVCategory } from "./types";

export const getMoviesByCategory = async ({ category }: GetByCategory) => {
  try {
    const res = await fetch(
      MOVIES_API_CONFIG_ROUTES[category as MoviesCategory],
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      },
    );

    if (!res.ok) {
      throw new Error(`Error : ${res.statusText}`);
    }

    const data = await res.json();

    const parsedData = CategoryResponseSuccessfulSchema.parse(data);

    return parsedData;
  } catch (err) {
    if (err instanceof Error) {
      toast.error(err.message);
    }
  }
};

export const getSerieByCategory = async ({ category }: GetByCategory) => {
  try {
    const res = await fetch(SERIES_API_CONFIG_ROUTES[category as TVCategory], {
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

    const parsedData = CategoryResponseSuccessfulSchema.parse(data);

    return parsedData;
  } catch (err) {
    if (err instanceof Error) {
      toast.error(err.message);
    }
  }
};
