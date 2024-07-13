import { useTranslation } from "react-i18next";
import { Form } from "../ui/form/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Spinner } from "../ui/Spinner";
import { useFormContext } from "../ui/form/context/useFormContext";
import {
  UserPasswordFormSchema,
  UserPasswordSchema,
} from "./schemas/UserPasswordFormSchema";
import { useUpdateUserPassword } from "../authentication/mutations/useUpdateUserPassword";
import { ValidationErrorMessage } from "../../lib/i18n/i18n.types";

export const UserPasswordForm = () => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<UserPasswordSchema>({
    resolver: zodResolver(UserPasswordFormSchema),
  });

  const { isPasswordShow } = useFormContext();

  const { update, isUpdating, updateError } = useUpdateUserPassword();

  const submitHandler = ({ password }: UserPasswordSchema) => {
    update({ password },{
      onSuccess:() => {
        reset()
      }
    });
  };
  return (
    <>
      <h2 className="mb-4">{t("settings.update-password")}</h2>
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
          {isUpdating ? <Spinner /> : t("forms.forgot-password-title")}
        </Form.Submit>
      </Form>
      {updateError && (
        <p className="mb-8 text-center text-sm text-red-400 transition-all">
          {t(updateError.generateError())}
        </p>
      )}
    </>
  );
};
