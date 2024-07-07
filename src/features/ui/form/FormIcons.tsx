import { ReactNode } from "react";

type FormIconsProps = {
  children: ReactNode;
};

export const FormIcons = ({ children }: FormIconsProps) => {
  return (
    <div className="absolute right-6 top-1/2 z-10 flex -translate-y-1/2 items-center gap-2 bg-slate-700">
      {children}
    </div>
  );
};
