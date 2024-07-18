import { CustomLink } from "../ui/CustomLink";
import { Form } from "../ui/form/Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema, LoginSchema } from "./schema/LoginFormSchema";
import { RouterRoutes } from "../../types/routes";
import { useFormContext } from "../ui/form/context/useFormContext";
import { useTranslation } from "react-i18next";
import { ValidationErrorMessage } from "../../lib/i18n/i18n.types";
import { useLogin } from "./mutations/useLogin";
import { Spinner } from "../ui/Spinner";

export const LoginForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "test@test.com",
      password: "123456",
    },
  });
  const { login, isLogin, loginError } = useLogin();
  const { t } = useTranslation();
  const { isPasswordShow } = useFormContext();
  const submitHandler = ({ email, password }: LoginSchema) => {
    login(
      { email, password },
      {
        onSuccess: () => {
          reset();
        },
      },
    );
  };

  return (
    <div className="rounded-sm bg-slate-800 p-8">
      <h1 className="mb-10 text-2xl font-medium text-slate-50">
        {t("forms.login-title")}
      </h1>
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
            <Form.Label id="email">{t("forms.email-input-title")}</Form.Label>
          </Form.InputContainer>
          {errors?.email && (
            <Form.Error>
              {t(errors.email.message as ValidationErrorMessage)}
            </Form.Error>
          )}
        </Form.Item>
        <Form.Item>
          <Form.InputContainer>
            <Form.Input
              id="password"
              type={`${isPasswordShow ? "text" : "password"}`}
              required
              {...register("password")}
            />
            <Form.Label id="password">
              {t("forms.password-input-title")}
            </Form.Label>
            <Form.Icons>
              <Form.TogglePassword />
            </Form.Icons>
          </Form.InputContainer>
          {errors?.password && (
            <Form.Error>
              {t(errors.password.message as ValidationErrorMessage)}
            </Form.Error>
          )}
        </Form.Item>
        <Form.Submit>{isLogin ? <Spinner /> : t("links.log-in")}</Form.Submit>
      </Form>
      {loginError && (
        <p className="mb-8 text-center text-sm text-red-400 transition-all">
          {t(loginError.generateError())}
        </p>
      )}
      <span className="mb-8 block h-[1px] w-full bg-slate-700">&nbsp;</span>
      <p className="mb-2 text-center text-slate-50">
        {t("forms.not-register")}{" "}
        <CustomLink to={RouterRoutes.REGISTER} type="inline">
          {t("links.register")}
        </CustomLink>
      </p>
      <p className="text-center text-slate-50">
        {t("forms.forgot-password")}{" "}
        <CustomLink to={RouterRoutes.FORGOT_PASSWORD} type="inline">
          {t("links.reset-password")}
        </CustomLink>
      </p>
    </div>
  );
};
