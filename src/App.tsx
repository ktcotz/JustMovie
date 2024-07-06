import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouterRoutes } from "./types/routes";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: RouterRoutes.HOME,
    element: <Home />,
    errorElement: <NotFound />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
