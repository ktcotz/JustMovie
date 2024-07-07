import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouterRoutes } from "./types/routes";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { FormContextProvider } from "./features/ui/form/context/FormContext";

const router = createBrowserRouter([
  {
    path: RouterRoutes.HOME,
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: RouterRoutes.LOGIN,
    element: (
      <FormContextProvider>
        <Login />
      </FormContextProvider>
    ),
  },
  {
    path: RouterRoutes.REGISTER,
    element: (
      <FormContextProvider>
        <Register />
      </FormContextProvider>
    ),
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
