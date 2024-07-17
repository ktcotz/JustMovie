import { ButtonHTMLAttributes, ReactNode } from "react";
import twMerge from "clsx";

type ButtonType =
  | "primary"
  | "avatar"
  | "tooltip"
  | "settings"
  | "bookmark"
  | "pagination";

type ButtonProps = {
  children: ReactNode;
  modifier?: ButtonType;
};

export const Button = ({
  children,
  modifier = "primary",
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const base = "font-semibold flex items-center justify-center";

  const modifierObject: Record<ButtonType, string> = {
    primary:
      " rounded-sm bg-secondary text-slate-950 p-3 md:p-4 hover:bg-red-500 transition md:px-8 focus:outline-none focus:ring focus:ring-red-500 focus:ring-offset-1 focus:ring-offset-primary",
    avatar: "rounded-full",
    tooltip:
      "rounded-sm w-full p-2 bg-secondary hover:bg-red-500 transition  focus:outline-none focus:ring focus:ring-red-500 focus:ring-offset-1 focus:ring-offset-primary",
    settings:
      "rounded-sm bg-secondary p-2 text-slate-950 hover:bg-red-500 transition  focus:outline-none focus:ring focus:ring-red-500 focus:ring-offset-1 focus:ring-offset-primary",
    bookmark:
      "absolute top-2 right-2 lg:top-6 lg:right-6 bg-slate-800/60 w-8 h-8 rounded-full ",
    pagination:
      "bg-transparent text-slate-50 font-semibold px-4 sm:px-8 hover:bg-white hover:text-tag transition-all",
  };

  const className = twMerge(base, modifier && modifierObject[modifier]);

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};
