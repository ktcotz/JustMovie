import { Form } from "../ui/form/Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  ForgotPasswordSchema,
  ForgotSchema,
} from "./schema/ForgotPasswordSchema";
import { useTranslation } from "react-i18next";
import { ValidationErrorMessage } from "../../lib/i18n/i18n.types";
import { useForgotPassword } from "./mutations/useForgotPassword";
import { Spinner } from "../ui/Spinner";

export const ForgotPasswordForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<ForgotSchema>({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const { forgot, isForgotLoading, forgotError } = useForgotPassword();
  const { t } = useTranslation();
  const submitHandler = ({ email }: ForgotSchema) => {
    forgot(
      { email },
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
          {errors?.email && (
            <Form.Error>
              {t(errors.email.message as ValidationErrorMessage)}
            </Form.Error>
          )}
        </Form.Item>
        <Form.Submit>
          {isForgotLoading ? <Spinner /> : t("links.reset-password")}
        </Form.Submit>
      </Form>
      {forgotError && (
        <p className="mb-8 text-center text-sm text-red-400 transition-all">
          {t(forgotError.generateError())}
        </p>
      )}
    </div>
  );
};
