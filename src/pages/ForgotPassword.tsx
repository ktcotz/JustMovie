import { ForgotPasswordForm } from "../features/authentication/ForgotPasswordForm";
import { Logo } from "../features/ui/Logo";
import { Wrapper } from "../features/ui/Wrapper";

export const ForgotPassword = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-primary py-4">
      <Logo />
      <Wrapper type="form">
        <ForgotPasswordForm />
      </Wrapper>
    </div>
  );
};
