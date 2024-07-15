import { MoviesCategory, TVCategory } from "./types";

export const API = `https://api.themoviedb.org/3`;

export const MOVIES_API_CONFIG_ROUTES: Record<MoviesCategory, string> = {
  trending: `${API}/trending/all/day?language=${navigator.language}`,
  recommended: `${API}/movie/popular?language=${navigator.language}`,
  top_rated: `${API}/movie/top_rated?language=${navigator.language}`,
  upcoming: `${API}/movie/upcoming?language=${navigator.language}`,
  horror: `${API}/discover/movie?language=${navigator.language}&with_genres=27`,
  comedy: `${API}/discover/movie?language=${navigator.language}&with_genres=35`,
  war: `${API}/discover/movie?language=${navigator.language}&with_genres=10752`,
  animation: `${API}/discover/movie?language=${navigator.language}&with_genres=16`,
  fantasy: `${API}/discover/movie?language=${navigator.language}&with_genres=14`,
  romance: `${API}/discover/movie?language=${navigator.language}&with_genres=10749`,
};

export const SERIES_API_CONFIG_ROUTES: Record<TVCategory, string> = {
  trending: `${API}/tv/on_the_air?language=${navigator.language}`,
  recommended: `${API}/tv/popular?language=${navigator.language}`,
  top_rated: `${API}/tv/top_rated?language=${navigator.language}`,
  upcoming: `${API}/tv/airing_today?language=${navigator.language}`,
  drama: `${API}/discover/tv?language=${navigator.language}&with_genres=18`,
  comedy: `${API}/discover/tv?language=${navigator.language}&with_genres=35`,
  kids: `${API}/discover/tv?language=${navigator.language}&with_genres=10762`,
  animation: `${API}/discover/tv?language=${navigator.language}&with_genres=16`,
  mystery: `${API}/discover/tv?language=${navigator.language}&with_genres=9648`,
  family: `${API}/discover/tv?language=${navigator.language}&with_genres=10751`,
};
