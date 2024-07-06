import { ReactNode } from "react";
import twMerge from "clsx";

type WrapperType = "primary";

type WrapperProps = {
  children: ReactNode;
  type?: WrapperType;
};

export const Wrapper = ({ children, type = "primary" }: WrapperProps) => {
  const base = "mx-auto px-4";

  const modifier: Record<WrapperType, string> = {
    primary: "max-w-6xl",
  };

  const className = twMerge(base, modifier[type]);
  return <div className={className}>{children}</div>;
};
