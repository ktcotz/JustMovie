import toast from "react-hot-toast";

import { GetByCategory } from "../queries/useCategory";
import {
  API,
  language,
  MOVIES_API_CONFIG_ROUTES,
  SERIES_API_CONFIG_ROUTES,
} from "./config";
import {
  CategoryResponseSuccessfulSchema,
  DetailsCategorySchema,
} from "../schema/CategorySchema";
import { MoviesCategory, TVCategory } from "./types";

import { supabase } from "../../../lib/supabase/supabase";
import { CustomError } from "../../../utils/CustomError";
import { Bookmark } from "../CategoryBookmark";
import { GetIndividualData } from "../queries/useGetIndividual";
import { BookmarkSupabaseSchema } from "../schema/BookmarkSchema";
import { User } from "@supabase/supabase-js";
import { GetByQueryCategory } from "../queries/useGetQueryCategory";
import { GetVideoData } from "../queries/useCategoryVideo";
import { VideoSuccessfulResponseSchema } from "../schema/VideoSchema";

export const getMoviesByCategory = async ({
  category,
  page,
}: GetByCategory) => {
  try {
    const res = await fetch(
      `${page ? `${MOVIES_API_CONFIG_ROUTES[category as MoviesCategory]}&page=${page}` : MOVIES_API_CONFIG_ROUTES[category as MoviesCategory]}`,
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

export const getSerieByCategory = async ({ category, page }: GetByCategory) => {
  try {
    const res = await fetch(
      `${page ? `${SERIES_API_CONFIG_ROUTES[category as TVCategory]}&page=${page}` : SERIES_API_CONFIG_ROUTES[category as TVCategory]}`,
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

export const getCategoryByQuery = async ({
  query,
  page,
}: GetByQueryCategory) => {
  try {
    const res = await fetch(
      `${API}/search/multi?query=${query}&language=${language}&page=${page}`,
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

export const manageBookmark = async ({
  custom_id,
  type,
  user_id,
}: Bookmark) => {
  const { data: bookmarks, error: getError } = await supabase
    .from("bookmarks")
    .select()
    .eq("user_id", user_id)
    .eq("custom_id", custom_id);

  if (getError) {
    throw new CustomError({
      message: getError.message,
    });
  }

  if (bookmarks && bookmarks.length > 0) {
    return await supabase
      .from("bookmarks")
      .delete()
      .eq("user_id", user_id)
      .eq("custom_id", custom_id);
  }

  const { data, error } = await supabase
    .from("bookmarks")
    .insert([{ custom_id, type, user_id }])
    .select();

  if (error) {
    throw new CustomError({
      message: error.message,
    });
  }

  return data;
};

export const getBookmarks = async ({ user_id }: { user_id: User["id"] }) => {
  const { data: bookmarks, error } = await supabase
    .from("bookmarks")
    .select("*")
    .eq("user_id", user_id);

  if (error) {
    throw new CustomError({
      message: error.message,
    });
  }

  const parsedBookmarks = BookmarkSupabaseSchema.parse(bookmarks);

  return parsedBookmarks;
};

export const getIndividual = async ({ id, type }: GetIndividualData) => {
  const res = await fetch(`${API}/${type}/${id}?language=${language}`, {
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

  const parsedData = DetailsCategorySchema.parse(data);

  return parsedData;
};

export const getVideo = async ({ id }: GetVideoData) => {
  const res = await fetch(`${API}/movie/${id}/videos?language=${language}`, {
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

  const parsedData = VideoSuccessfulResponseSchema.parse(data);

  return parsedData;
};
