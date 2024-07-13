import { useTranslation } from "react-i18next";
import { useSignout } from "../../authentication/mutations/useSignout";
import { Button } from "../Button";
import { CustomLink } from "../CustomLink";
import { Spinner } from "../Spinner";

export const AvatarTooltip = () => {
  const { signout, isSignoutLoading } = useSignout();
  const { t } = useTranslation();
  return (
    <div className="absolute -bottom-2 left-14 z-50 flex w-52 -translate-x-full translate-y-full flex-col gap-4 rounded-md bg-slate-800 p-6 shadow-md md:bottom-32 md:left-64 md:-translate-x-full md:translate-y-full">
      <Button modifier="tooltip" onClick={() => signout()}>
        {isSignoutLoading ? <Spinner /> : t("links.sign-out")}
      </Button>
      <CustomLink to={"settings"} type="primary">
        {t("links.settings")}
      </CustomLink>
    </div>
  );
};
