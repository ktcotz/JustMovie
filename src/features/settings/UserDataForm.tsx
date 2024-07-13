import { useTranslation } from "react-i18next";
import { Form } from "../ui/form/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  UserDataFormSchema,
  UserDataSchema,
} from "./schemas/UserDataFormSchema";
import { useUpdateUserData } from "./mutations/useUpdateUserData";
import { Spinner } from "../ui/Spinner";
import { useGetUser } from "../authentication/mutations/useGetUser";
import { User } from "@supabase/supabase-js";

export const UserDataForm = () => {
  const { user } = useGetUser();
  const { t } = useTranslation();
  const { handleSubmit, register } = useForm<UserDataSchema>({
    resolver: zodResolver(UserDataFormSchema),
    defaultValues: {
      name: (user as User).user_metadata.name,
      surname: (user as User).user_metadata.surname,
    },
  });

  const { update, isUpdating, updateError } = useUpdateUserData();

  const submitHandler = ({ name, surname }: UserDataSchema) => {
    update({ name, surname });
  };
  return (
    <>
      <h2 className="mb-4">{t("settings.set-name")}</h2>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <div className="flex gap-4">
          <Form.Item>
            <Form.InputContainer>
              <Form.Input
                id="name"
                required
                type="text"
                {...register("name")}
              />
              <Form.Label id="name">{t("forms.name-input-title")}</Form.Label>
            </Form.InputContainer>
          </Form.Item>
          <Form.Item>
            <Form.InputContainer>
              <Form.Input
                id="surname"
                type="text"
                required
                {...register("surname")}
              />
              <Form.Label id="surname">
                {t("forms.surname-input-title")}
              </Form.Label>
            </Form.InputContainer>
          </Form.Item>
        </div>
        <Form.Submit>
          {isUpdating ? <Spinner /> : t("forms.user-submit-title")}
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
