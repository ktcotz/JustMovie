import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import twMerge from "clsx";

type CustomLinkType = "primary";

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
    primary: "bg-secondary text-slate-950 px-8 py-2",
  };

  const className = twMerge(base, type && modifier[type]);

  return (
    <Link {...rest} className={className}>
      {children}
    </Link>
  );
};
