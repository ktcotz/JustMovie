import { useTranslation } from "react-i18next";
import { UserDataForm } from "../../features/settings/UserDataForm";
import { UserChangeAvatar } from "../../features/settings/UserChangeAvatar";
import { useGetUser } from "../../features/authentication/mutations/useGetUser";
import { Spinner } from "../../features/ui/Spinner";
import { UserPasswordForm } from "../../features/settings/UserPasswordForm";

export const DashboardUserSettings = () => {
  const { user, isLoading } = useGetUser();
  const { t } = useTranslation();

  if (isLoading) {
    return <Spinner />;
  }

  const fullName = `${user?.user_metadata.name} ${user?.user_metadata.surname}`;
  const userName = fullName.length >= 3 ? fullName : t("settings.user-name");

  return (
    <div className="text-slate-50">
      <h1 className="mb-8 text-2xl">{t("settings.title")}</h1>
      <div className="flex flex-col gap-8 rounded-md bg-slate-800 p-6">
        <div className="flex flex-col gap-2">
          <h2>{userName}</h2>
          <p className="text-sm text-slate-300">{user?.email}</p>
        </div>
        <div className="max-w-[350px]">
          <UserDataForm />
        </div>
        <span className="mb-8 block h-[1px] w-full bg-slate-700">&nbsp;</span>
        <div className="max-w-[350px]">
          <UserPasswordForm />
        </div>
        <span className="block h-[1px] w-full bg-slate-700">&nbsp;</span>
        <UserChangeAvatar />
      </div>
    </div>
  );
};
