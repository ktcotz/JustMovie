import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouterRoutes } from "./types/routes";
import { FormContextProvider } from "./features/ui/form/context/FormContext";
import { ProtectedRoute } from "./features/ui/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import { WithSuspense } from "./features/ui/Suspense";

const Home = React.lazy(() =>
  import("./pages/Home").then((m) => ({ default: m.Home })),
);
const NotFound = React.lazy(() =>
  import("./pages/NotFound").then((m) => ({ default: m.NotFound })),
);
const Login = React.lazy(() =>
  import("./pages/Login").then((m) => ({ default: m.Login })),
);
const Register = React.lazy(() =>
  import("./pages/Register").then((m) => ({ default: m.Register })),
);
const ForgotPassword = React.lazy(() =>
  import("./pages/ForgotPassword").then((m) => ({ default: m.ForgotPassword })),
);
const ResetPassword = React.lazy(() =>
  import("./pages/ResetPassword").then((m) => ({ default: m.ResetPassword })),
);
const Dashboard = React.lazy(() =>
  import("./pages/Dashboard/Dashboard").then((m) => ({ default: m.Dashboard })),
);
const DashboardHome = React.lazy(() =>
  import("./pages/Dashboard/DashboardHome").then((m) => ({
    default: m.DashboardHome,
  })),
);
const DashboardMovies = React.lazy(() =>
  import("./pages/Dashboard/DashboardMovies").then((m) => ({
    default: m.DashboardMovies,
  })),
);
const DashboardTVSeries = React.lazy(() =>
  import("./pages/Dashboard/DashboardTvSeries").then((m) => ({
    default: m.DashboardTVSeries,
  })),
);
const DashboardBookmarks = React.lazy(() =>
  import("./pages/Dashboard/DashboardBookmarks").then((m) => ({
    default: m.DashboardBookmarks,
  })),
);
const DashboardUserSettings = React.lazy(() =>
  import("./pages/Dashboard/DashboardUserSettings").then((m) => ({
    default: m.DashboardUserSettings,
  })),
);
const DashboardSingleOvierview = React.lazy(() =>
  import("./pages/Dashboard/DashboardSingleOverview").then((m) => ({
    default: m.DashboardSingleOvierview,
  })),
);
const DashboardSeeMore = React.lazy(() =>
  import("./pages/Dashboard/DashboardSeeMore").then((m) => ({
    default: m.DashboardSeeMore,
  })),
);
const DashboardSearch = React.lazy(() =>
  import("./pages/Dashboard/DashboardSearch").then((m) => ({
    default: m.DashboardSearch,
  })),
);
const DashboardVideo = React.lazy(() =>
  import("./pages/Dashboard/DashboardVideo").then((m) => ({
    default: m.DashboardVideo,
  })),
);

const router = createBrowserRouter([
  {
    path: RouterRoutes.HOME,
    element: WithSuspense(<Home />),
  },
  {
    path: RouterRoutes.LOGIN,
    element: WithSuspense(
      <FormContextProvider>
        <Login />
      </FormContextProvider>,
    ),
  },
  {
    path: RouterRoutes.REGISTER,
    element: WithSuspense(
      <FormContextProvider>
        <Register />
      </FormContextProvider>,
    ),
  },
  {
    path: RouterRoutes.FORGOT_PASSWORD,
    element: WithSuspense(
      <FormContextProvider>
        <ForgotPassword />
      </FormContextProvider>,
    ),
  },
  {
    path: RouterRoutes.RESET_PASSWORD,
    element: WithSuspense(
      <FormContextProvider>
        <ResetPassword />
      </FormContextProvider>,
    ),
  },
  {
    path: RouterRoutes.DASHBOARD,
    element: WithSuspense(
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>,
    ),
    children: [
      {
        path: "",
        element: WithSuspense(<DashboardHome />),
      },
      {
        path: RouterRoutes.DASHBOARD_SINGLE_OVERVIEW,
        element: WithSuspense(<DashboardSingleOvierview />),
      },
      {
        path: RouterRoutes.DASHBOARD_SINGLE_OVERVIEW_VIDEO,
        element: WithSuspense(<DashboardVideo />),
      },
      {
        path: RouterRoutes.DASHBOARD_MOVIES,
        element: WithSuspense(<DashboardMovies />),
      },
      {
        path: RouterRoutes.DASHBOARD_TV_SERIES,
        element: WithSuspense(<DashboardTVSeries />),
      },
      {
        path: RouterRoutes.DASHBOARD_BOOKMARKS,
        element: WithSuspense(<DashboardBookmarks />),
      },
      {
        path: RouterRoutes.DASHBOARD_USER_SETTINGS,
        element: WithSuspense(
          <FormContextProvider>
            <DashboardUserSettings />
          </FormContextProvider>,
        ),
      },
      {
        path: RouterRoutes.DASHBOARD_SEE_MORE,
        element: WithSuspense(<DashboardSeeMore />),
      },
      {
        path: RouterRoutes.DASHBOARD_SEARCH,
        element: WithSuspense(<DashboardSearch />),
      },
    ],
  },
  {
    path: RouterRoutes.NOT_FOUND,
    element: WithSuspense(<NotFound />),
  },
]);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            maxWidth: "30rem",
            textAlign: "center",
            backgroundColor: "#10141E",
            color: "rgb(248,250,252)",
          },
          success: {
            duration: 3000,
          },
        }}
        gutter={8}
      />
    </>
  );
};
