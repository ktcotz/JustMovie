import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import twMerge from "clsx";

type CustomLinkType = "primary" | "logo" | "secondary" | "inline";

type CustomLinkProps = {
  children: ReactNode;
  type?: CustomLinkType;
};

export const CustomLink = ({
  children,
  type,
  ...rest
}: CustomLinkProps & LinkProps) => {
  const base = "rounded-sm font-semibold";

  const modifier: Record<CustomLinkType, string> = {
    primary:
      "bg-secondary text-slate-950 px-4 py-2 hover:bg-red-500 transition md:px-8 focus:outline-none focus:ring focus:ring-red-500 focus:ring-offset-1 focus:ring-offset-primary",
    logo: "flex gap-4 items-center justify-center",
    secondary:
      "bg-slate-900 text-slate-50 px-4 py-2 hover:bg-slate-800 transition md:px-8 focus:outline-none focus:ring focus:ring-slate-800 focus:ring-offset-1 focus:ring-offset-primary",
    inline:
      "border-b border-transparent text-red-400 hover:text-red-300 transition font-semibold focus:outline-none focus:border-current",
  };

  const className = twMerge(base, type && modifier[type]);

  return (
    <Link {...rest} className={className}>
      {children}
    </Link>
  );
};
