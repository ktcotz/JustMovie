import { useTranslation } from "react-i18next";
import { useFormContext } from "./context/useFormContext";

export const FormTogglePassword = () => {
  const { isPasswordShow, togglePassword } = useFormContext();

  const { t } = useTranslation();

  const label = isPasswordShow
    ? t("forms.toggle-password-label-show")
    : t("forms.toggle-password-label-hide");

  return (
    <button aria-label={label} type="button" onClick={() => togglePassword()}>
      <img
        src={`./images/${isPasswordShow ? "icon-close-eye.svg" : "icon-eye.svg"}`}
        alt=""
        width={24}
        height={24}
        className="invert"
      />
    </button>
  );
};
