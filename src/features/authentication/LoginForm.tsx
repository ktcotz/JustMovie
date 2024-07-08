import { CustomLink } from "../ui/CustomLink";
import { Form } from "../ui/form/Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema, LoginSchema } from "./schema/LoginFormSchema";
import { RouterRoutes } from "../../types/routes";
import { useFormContext } from "../ui/form/context/useFormContext";

export const LoginForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(LoginFormSchema),
  });

  const { isPasswordShow } = useFormContext();

  const submitHandler = (data: LoginSchema) => {
    console.log(data);
    reset();
  };

  return (
    <div className="rounded-sm bg-slate-800 p-8">
      <h2 className="mb-10 text-2xl font-medium text-slate-50">Login</h2>
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
              type={`${isPasswordShow ? "text" : "password"}`}
              required
              {...register("password")}
            />
            <Form.Label id="password">Password</Form.Label>
            <Form.Icons>
              <Form.TogglePassword />
            </Form.Icons>
          </Form.InputContainer>
          {errors?.password && (
            <Form.Error>{errors.password.message}</Form.Error>
          )}
        </Form.Item>
        <Form.Submit>Login to your account</Form.Submit>
      </Form>
      <p className="mb-8 text-center text-sm text-red-400 transition-all">
        Error
      </p>
      <span className="mb-8 block h-[1px] w-full bg-slate-700">&nbsp;</span>
      <p className="text-center text-slate-50">
        Don't have an account?{" "}
        <CustomLink to={RouterRoutes.REGISTER} type="inline">
          Sign up
        </CustomLink>
      </p>
      <p className="text-center text-slate-50">or</p>
      <p className="text-center text-slate-50">
        Forgot your password?{" "}
        <CustomLink to={RouterRoutes.FORGOT_PASSWORD} type="inline">
          Reset
        </CustomLink>
      </p>
    </div>
  );
};
