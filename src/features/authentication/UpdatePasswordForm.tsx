import { Form } from "../ui/form/Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useTranslation } from "react-i18next";
import { ValidationErrorMessage } from "../../lib/i18n/i18n.types";
import { Spinner } from "../ui/Spinner";
import {
  UpdatePasswordFormSchema,
  UpdatePasswordSchema,
} from "./schema/UpdatePasswordSchema";
import { useFormContext } from "../ui/form/context/useFormContext";
import { useUpdateUserPassword } from "./mutations/useUpdateUserPassword";

export const UpdatePasswordForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<UpdatePasswordSchema>({
    resolver: zodResolver(UpdatePasswordFormSchema),
  });
  const { update, isUpdating, updateError } = useUpdateUserPassword();
  const { t } = useTranslation();
  const { isPasswordShow } = useFormContext();
  const submitHandler = ({ password }: UpdatePasswordSchema) => {
    update(
      { password },
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
        <Form.Submit>
          {isUpdating ? <Spinner /> : t("links.reset-password")}
        </Form.Submit>
      </Form>
      {updateError && (
        <p className="mb-8 text-center text-sm text-red-400 transition-all">
          {t(updateError.generateError())}
        </p>
      )}
    </div>
  );
};
