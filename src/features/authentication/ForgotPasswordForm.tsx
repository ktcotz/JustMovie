import { Form } from "../ui/form/Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  ForgotPasswordSchema,
  ForgotSchema,
} from "./schema/ForgotPasswordSchema";

export const ForgotPasswordForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<ForgotSchema>({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const submitHandler = (data: ForgotSchema) => {
    console.log(data);
    reset();
  };

  return (
    <div className="rounded-sm bg-slate-800 p-8">
      <h2 className="mb-10 text-2xl font-medium text-slate-50">
        Forgot password
      </h2>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Form.Item>
          <Form.InputContainer>
            <Form.Input
              id="email"
              required
              type="text"
              autoComplete="email"
              {...register("email")}
            />
            <Form.Label id="email">Email address</Form.Label>
          </Form.InputContainer>
          {errors?.email && <Form.Error>{errors.email.message}</Form.Error>}
        </Form.Item>
        <Form.Submit>Reset password</Form.Submit>
      </Form>
      <p className="text-center text-sm text-red-400 transition-all">Error</p>
    </div>
  );
};
