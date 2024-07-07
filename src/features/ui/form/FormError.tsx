import { ReactNode } from "react";

type FormErrorProps = {
  children: ReactNode;
};

export const FormError = ({ children }: FormErrorProps) => {
  return (
    <p className="ml-2 mt-2 text-sm text-red-400 transition-all">{children}</p>
  );
};
