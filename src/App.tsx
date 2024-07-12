import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouterRoutes } from "./types/routes";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { FormContextProvider } from "./features/ui/form/context/FormContext";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Dashboard } from "./pages/Dashboard";
import { ProtectedRoute } from "./features/ui/ProtectedRoute";
import { ResetPassword } from "./pages/ResetPassword";
import { Toaster } from "react-hot-toast";

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
  {
    path: RouterRoutes.FORGOT_PASSWORD,
    element: (
      <FormContextProvider>
        <ForgotPassword />
      </FormContextProvider>
    ),
  },
  {
    path: RouterRoutes.DASHBOARD,
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: RouterRoutes.RESET_PASSWORD,
    element: (
      <FormContextProvider>
        <ResetPassword />,
      </FormContextProvider>
    ),
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
