import { HTMLAttributes, ReactNode } from "react";

type FormLabelProps = {
  children: ReactNode;
  id: string;
};

export const FormLabel = ({
  children,
  id,
  ...rest
}: FormLabelProps & HTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      htmlFor={id}
      className="absolute left-0 top-1/2 -translate-y-1/2 px-2 text-slate-300 transition-all peer-valid:left-4 peer-valid:top-0 peer-valid:rounded-md peer-valid:bg-slate-700 peer-valid:text-slate-50 peer-focus:left-4 peer-focus:top-0 peer-focus:rounded-md peer-focus:bg-slate-700 peer-focus:px-2 peer-focus:text-slate-50"
      {...rest}
    >
      {children}
    </label>
  );
};
