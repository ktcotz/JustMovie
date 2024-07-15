import { RouterRoutes } from "../../types/routes";

export const mainNavigationData = [
  {
    id: 1,
    icon: "./../images/icon-nav-home.svg",
    title: "navigation.nav-home",
    path: RouterRoutes.DASHBOARD,
  },
  {
    id: 2,
    icon: "./../images/icon-nav-movies.svg",
    title: "navigation.nav-movies",
    path: RouterRoutes.DASHBOARD_MOVIES,
  },
  {
    id: 3,
    icon: "./../images/icon-nav-tv-series.svg",
    title: "navigation.nav-tv-series",
    path: RouterRoutes.DASHBOARD_TV_SERIES,
  },
  {
    id: 4,
    icon: "./../images/icon-nav-bookmark.svg",
    title: "navigation.nav-bookmark",
    path: RouterRoutes.DASHBOARD_BOOKMARKS,
  },
] as const;
