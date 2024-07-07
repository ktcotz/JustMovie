import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouterRoutes } from "./types/routes";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

const router = createBrowserRouter([
  {
    path: RouterRoutes.HOME,
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: RouterRoutes.LOGIN,
    element: <Login />,
  },
  {
    path: RouterRoutes.REGISTER,
    element: <Register />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
