import { LoginForm } from "../features/authentication/LoginForm";
import { Logo } from "../features/ui/Logo";
import { Wrapper } from "../features/ui/Wrapper";

export const Login = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-primary py-4">
      <Logo />
      <Wrapper type="form">
        <LoginForm />
      </Wrapper>
    </div>
  );
};
