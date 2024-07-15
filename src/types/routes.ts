export enum RouterRoutes {
  HOME = "/",
  LOGIN = "/login",
  REGISTER = "/register",
  FORGOT_PASSWORD = "/forgot-password",
  RESET_PASSWORD = "/reset-password",
  DASHBOARD = "/dashboard",
  DASHBOARD_MOVIES = "movies",
  DASHBOARD_TV_SERIES = "series",
  DASHBOARD_BOOKMARKS = "bookmarks",
  DASHBOARD_USER_SETTINGS = "settings",
  DASHBOARD_SINGLE_OVERVIEW = ":type/:id",
  NOT_FOUND = "*",
}
