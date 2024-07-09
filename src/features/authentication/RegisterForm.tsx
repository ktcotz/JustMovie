import { CustomLink } from "../ui/CustomLink";
import { Form } from "../ui/form/Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RouterRoutes } from "../../types/routes";
import {
  RegisterFormSchema,
  RegisterSchema,
} from "./schema/RegisterFormSchema";
import { useFormContext } from "../ui/form/context/useFormContext";
import { useTranslation } from "react-i18next";
import { ValidationErrorMessage } from "../../lib/i18n/i18n.types";

export const RegisterForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<RegisterSchema>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const { t } = useTranslation();

  const { isPasswordShow } = useFormContext();

  const submitHandler = (data: RegisterSchema) => {
    console.log(data);
    reset();
  };

  return (
    <div className="rounded-sm bg-slate-800 p-8">
      <h1 className="mb-10 text-2xl font-medium text-slate-50">
        {t("forms.register-title")}
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
        <Form.Item>
          <Form.InputContainer>
            <Form.Input
              id="confirmPassword"
              type="password"
              required
              {...register("confirmPassword")}
            />
            <Form.Label id="confirmPassword">
              {t("forms.password-confirm-input-title")}
            </Form.Label>
          </Form.InputContainer>
          {errors?.confirmPassword && (
            <Form.Error>
              {t(errors.confirmPassword.message as ValidationErrorMessage)}
            </Form.Error>
          )}
        </Form.Item>
        <Form.Submit>{t("links.register")}</Form.Submit>
      </Form>
      <span className="mb-8 block h-[1px] w-full bg-slate-700">&nbsp;</span>
      <p className="text-center text-slate-50">
        {t("forms.already-register")}{" "}
        <CustomLink to={RouterRoutes.LOGIN} type="inline">
          {t("links.log-in")}
        </CustomLink>
      </p>
    </div>
  );
};
