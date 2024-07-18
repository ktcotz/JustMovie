import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="relative rounded-sm border bg-slate-900 text-slate-50">
      <img
        src="./images/icon-translate.svg"
        alt=""
        height={24}
        width={24}
        className="absolute left-2 top-1/2 -translate-y-1/2 invert"
      />
      <label htmlFor="language" className="sr-only">
        {t("utils.language-switcher-title")}
      </label>
      <select
        name="language"
        id="language"
        className="rounded-sm bg-transparent px-10 py-2 text-lg transition focus:outline-none focus:ring focus:ring-slate-50"
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="pl" className="text-slate-900">
          Polski
        </option>
        <option value="en" className="text-slate-900">
          English
        </option>
      </select>
    </div>
  );
};
