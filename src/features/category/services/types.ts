export type MoviesCategory =
  | "trending"
  | "recommended"
  | "top_rated"
  | "upcoming"
  | "horror"
  | "comedy"
  | "war"
  | "animation"
  | "fantasy"
  | "romance";

export type TVCategory =
  | "trending"
  | "recommended"
  | "top_rated"
  | "upcoming"
  | "drama"
  | "comedy"
  | "kids"
  | "animation"
  | "mystery"
  | "family";

export const moviesType = {
  28: "moviesType.action",
  12: "moviesType.adventure",
  16: "moviesType.animation",
  35: "moviesType.comedy",
  80: "moviesType.crime",
  99: "moviesType.documentary",
  18: "moviesType.drama",
  10751: "moviesType.family",
  14: "moviesType.fantasy",
  36: "moviesType.history",
  27: "moviesType.horror",
  10402: "moviesType.music",
  9648: "moviesType.mystery",
  10749: "moviesType.romance",
  878: "moviesType.science-fiction",
  10770: "moviesType.tv-movie",
  53: "moviesType.thriller",
  10752: "moviesType.war",
  37: "moviesType.western",
} as const;

export const tvType = {
  10759: "tvType.action",
  16: "tvType.animation",
  35: "tvType.comedy",
  80: "tvType.crime",
  99: "tvType.documentary",
  18: "tvType.drama",
  10751: "tvType.family",
  10762: "tvType.kids",
  9648: "tvType.mystery",
  10763: "tvType.news",
  10764: "tvType.reality",
  10765: "tvType.science-fiction",
  10766: "tvType.soap",
  10767: "tvType.talk",
  10768: "tvType.war",
  37: "tvType.western",
} as const;
