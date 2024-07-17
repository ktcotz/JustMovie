import { User } from "@supabase/supabase-js";
import { useGetUser } from "../authentication/mutations/useGetUser";
import { useTranslation } from "react-i18next";

export const Welcome = () => {
  const { user } = useGetUser();
  const { t } = useTranslation();

  const name = (user as User).user_metadata?.name || t("settings.user-name");

  return (
    <h1 className="mb-6 text-xl">
      {t("welcome.title")}, {name}
    </h1>
  );
};
