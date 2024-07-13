import { ButtonHTMLAttributes, ReactNode } from "react";
import twMerge from "clsx";

type ButtonType = "primary" | "avatar" | "tooltip" | "settings";

type ButtonProps = {
  children: ReactNode;
  modifier?: ButtonType;
};

export const Button = ({
  children,
  modifier = "primary",
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const base = "rounded-sm font-semibold flex items-center justify-center";

  const modifierObject: Record<ButtonType, string> = {
    primary:
      "bg-secondary text-slate-950 p-3 md:p-4 hover:bg-red-500 transition md:px-8 focus:outline-none focus:ring focus:ring-red-500 focus:ring-offset-1 focus:ring-offset-primary",
    avatar: "rounded-full",
    tooltip:
      "w-full p-2 bg-secondary hover:bg-red-500 transition  focus:outline-none focus:ring focus:ring-red-500 focus:ring-offset-1 focus:ring-offset-primary",
    settings:
      "bg-secondary p-2 text-slate-950 hover:bg-red-500 transition  focus:outline-none focus:ring focus:ring-red-500 focus:ring-offset-1 focus:ring-offset-primary",
  };

  const className = twMerge(base, modifier && modifierObject[modifier]);

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};
