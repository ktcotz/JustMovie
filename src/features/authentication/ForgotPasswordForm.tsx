import { Form } from "../ui/form/Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  ForgotPasswordSchema,
  ForgotSchema,
} from "./schema/ForgotPasswordSchema";
import { useTranslation } from "react-i18next";
import { ValidationErrorMessage } from "../../lib/i18n/i18n.types";

export const ForgotPasswordForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<ForgotSchema>({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const { t } = useTranslation();

  const submitHandler = (data: ForgotSchema) => {
    console.log(data);
    reset();
  };

  console.log(errors.email?.message);

  return (
    <div className="rounded-sm bg-slate-800 p-8">
      <h1 className="mb-10 text-2xl font-medium text-slate-50">
        {t("forms.forgot-password-title")}
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
          s
          {errors?.email && (
            <Form.Error>
              {t(errors.email.message as ValidationErrorMessage)}
            </Form.Error>
          )}
        </Form.Item>
        <Form.Submit>{t("links.reset-password")}</Form.Submit>
      </Form>
      <p className="text-center text-sm text-red-400 transition-all">Error</p>
    </div>
  );
};
