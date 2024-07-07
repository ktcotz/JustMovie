import { forwardRef, InputHTMLAttributes } from "react";

export const FormInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ ...rest }, ref) => {
  return (
    <input
      {...rest}
      ref={ref}
      className="peer w-full rounded-md bg-slate-700 p-4 text-slate-50 transition-all focus:outline-none focus:ring focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-slate-800"
    />
  );
});
