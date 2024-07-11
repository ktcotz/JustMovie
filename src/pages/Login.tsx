import { useEffect } from "react";
import { LoginForm } from "../features/authentication/LoginForm";
import { useGetUser } from "../features/authentication/mutations/useGetUser";
import { Logo } from "../features/ui/Logo";
import { Wrapper } from "../features/ui/Wrapper";
import { useNavigate } from "react-router";
import { RouterRoutes } from "../types/routes";

export const Login = () => {
  const { user } = useGetUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(RouterRoutes.DASHBOARD);
    }
  }, [user, navigate]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-primary py-4">
      <Logo />
      <Wrapper type="form">
        <LoginForm />
      </Wrapper>
    </div>
  );
};
