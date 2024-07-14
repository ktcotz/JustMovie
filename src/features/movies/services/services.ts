import toast from "react-hot-toast";
import { TrendingMovieSuccessfullResponseSchema } from "../schema/MovieSchema";

export const API = `https://api.themoviedb.org/3`;

export const getTrendingMovies = async () => {
  try {
    const res = await fetch(
      `${API}/trending/all/day?language=${navigator.language}`,
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

    const parsedData = TrendingMovieSuccessfullResponseSchema.parse(data);

    return parsedData;
  } catch (err) {
    if (err instanceof Error) {
      toast.error(err.message);
    }
  }
};
