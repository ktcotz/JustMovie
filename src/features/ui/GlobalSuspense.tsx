import { Logo } from "./Logo";

export const GlobalSuspense = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-primary">
      <Logo />
    </div>
  );
};
