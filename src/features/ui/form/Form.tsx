import { ReactNode } from "react";
import { FormError } from "./FormError";
import { FormInput } from "./FormInput";
import { FormInputContainer } from "./FormInputContainer";
import { FormItem } from "./FormItem";
import { FormLabel } from "./FormLabel";
import { FormSubmit } from "./FormSubmit";

type FormProps = {
  children: ReactNode;
};

export const Form = ({ children }: FormProps) => {
  return <form className="mb-8 flex flex-col gap-4">{children}</form>;
};

Form.Submit = FormSubmit;
Form.Label = FormLabel;
Form.Input = FormInput;
Form.InputContainer = FormInputContainer;
Form.Item = FormItem;
Form.Error = FormError;
