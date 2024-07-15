import toast from "react-hot-toast";

import { GetByCategory } from "../mutations/useCategory";
import {
  API,
  MOVIES_API_CONFIG_ROUTES,
  SERIES_API_CONFIG_ROUTES,
} from "./config";
import { CategoryResponseSuccessfulSchema } from "../schema/CategorySchema";
import { MoviesCategory, TVCategory } from "./types";
import { GetExternalID } from "../queries/useGetExternalID";
import { ExternalIDSchema } from "../schema/ExternalIDSchema";
import { supabase } from "../../../lib/supabase/supabase";
import { CustomError } from "../../../utils/CustomError";
import { Bookmark } from "../CategoryBookmark";
import { GetBookmarkData } from "../queries/useGetBookmark";
import {
  BookmarkFindSchema,
  BookmarkSupabaseSchema,
} from "../schema/BookmarkSchema";

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

export const getExternalID = async ({ id, type }: GetExternalID) => {
  const res = await fetch(`${API}/${type}/${id}/external_ids`, {
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

  const parsedData = ExternalIDSchema.parse(data);

  return parsedData;
};

export const manageBookmark = async ({
  custom_id,
  external_id,
  type,
}: Bookmark) => {
  const { data: bookmarks, error: getError } = await supabase
    .from("bookmarks")
    .select()
    .eq("custom_id", custom_id);

  if (getError) {
    throw new CustomError({
      message: getError.message,
    });
  }

  if (bookmarks && bookmarks.length > 0) {
    return await supabase.from("bookmarks").delete().eq("custom_id", custom_id);
  }

  const { data, error } = await supabase
    .from("bookmarks")
    .insert([{ custom_id, external_id, type }])
    .select();

  if (error) {
    throw new CustomError({
      message: error.message,
    });
  }

  return data;
};

export const getBookmarks = async () => {
  const { data: bookmarks, error } = await supabase
    .from("bookmarks")
    .select("*");

  if (error) {
    throw new CustomError({
      message: error.message,
    });
  }

  const parsedBookmarks = BookmarkSupabaseSchema.parse(bookmarks);

  return parsedBookmarks;
};

export const getBookmark = async ({ external_id }: GetBookmarkData) => {
  try {
    const res = await fetch(
      `${API}/find/${external_id}?external_source=imdb_id`,
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

    const parsedData = BookmarkFindSchema.parse(data);

    return parsedData;
  } catch (err) {
    if (err instanceof Error) {
      toast.error(err.message);
    }
  }
};
