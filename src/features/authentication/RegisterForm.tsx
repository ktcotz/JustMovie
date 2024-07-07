import { CustomLink } from "../ui/CustomLink";
import { Form } from "../ui/form/Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RouterRoutes } from "../../types/routes";
import { RegisterFormSchema, RegisterSchema } from "./RegisterFormSchema";

export const RegisterForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<RegisterSchema>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const submitHandler = (data: RegisterSchema) => {
    console.log(data);
    reset();
  };

  return (
    <div className="rounded-sm bg-slate-800 p-8">
      <h2 className="mb-10 text-2xl font-medium text-slate-50">Register</h2>
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
        <Form.Item>
          <Form.InputContainer>
            <Form.Input
              id="password"
              type="password"
              required
              {...register("password")}
            />
            <Form.Label id="password">Password</Form.Label>
            <Form.Icons>
              <Form.Icon
                src="./images/icon-close-eye.svg"
                alt=""
                label="Show password"
              />
            </Form.Icons>
          </Form.InputContainer>
          {errors?.password && (
            <Form.Error>{errors.password.message}</Form.Error>
          )}
        </Form.Item>
        <Form.Item>
          <Form.InputContainer>
            <Form.Input
              id="confirmPassword"
              type="password"
              required
              {...register("confirmPassword")}
            />
            <Form.Label id="confirmPassword">Confirm Password</Form.Label>
          </Form.InputContainer>
          {errors?.confirmPassword && (
            <Form.Error>{errors.confirmPassword.message}</Form.Error>
          )}
        </Form.Item>
        <Form.Submit>Register</Form.Submit>
      </Form>
      <span className="mb-8 block h-[1px] w-full bg-slate-700">&nbsp;</span>
      <p className="text-center text-slate-50">
        Already register?{" "}
        <CustomLink to={RouterRoutes.LOGIN} type="inline">
          Log in
        </CustomLink>
      </p>
    </div>
  );
};
