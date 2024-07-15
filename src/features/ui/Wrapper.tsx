import { ReactNode } from "react";
import twMerge from "clsx";

type WrapperType = "primary" | "typography" | "features" | "form" | "movies";

type WrapperProps = {
  children: ReactNode;
  type?: WrapperType;
};

export const Wrapper = ({ children, type = "primary" }: WrapperProps) => {
  const base = "mx-auto px-4 w-full";

  const modifier: Record<WrapperType, string> = {
    primary: "max-w-6xl",
    typography: "max-w-xl md:max-w-6xl",
    features: "max-w-xl md:max-w-6xl",
    form: "max-w-xl",
    movies: "max-w-[400px] sm:max-w-full",
  };

  const className = twMerge(base, modifier[type]);
  return <div className={className}>{children}</div>;
};
