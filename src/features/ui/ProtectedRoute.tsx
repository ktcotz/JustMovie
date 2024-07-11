import { ReactNode, useEffect } from "react";
import { useGetUser } from "../authentication/mutations/useGetUser";
import { Spinner } from "./Spinner";
import { useNavigate } from "react-router";
import { RouterRoutes } from "../../types/routes";

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useGetUser();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate(RouterRoutes.LOGIN);
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <Spinner />;

  return children;
};
