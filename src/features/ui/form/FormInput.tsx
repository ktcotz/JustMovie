import { InputHTMLAttributes } from "react";

export const FormInput = ({
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...rest}
      className="peer w-full rounded-md bg-slate-700 p-4 text-slate-50 transition-all focus:outline-none focus:ring focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-slate-800"
    />
  );
};
