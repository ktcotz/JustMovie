import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import { RouterRoutes } from "../../types/routes";

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleInputChange = (value: string) => {
    searchParams.set("query", value);

    setQuery(value);
    setSearchParams(searchParams);
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    navigate(`${RouterRoutes.DASHBOARD_SEARCH}?query=${query}&page=1`);
  };

  return (
    <form className="relative mb-6 flex items-center" onSubmit={handleSubmit}>
      <label htmlFor="search">
        <img src="./images/icon-search.svg" alt="" width={32} height={32} />
        <span className="sr-only">{t("forms.search-input-title")}</span>
      </label>
      <input
        type="text"
        id="search"
        placeholder={t("forms.search-input-title")}
        required
        value={query}
        className="w-full border-b border-transparent bg-transparent p-4 text-slate-50 valid:border-b-slate-800 focus:border-b-slate-800 focus:outline-none"
        onChange={(ev) => handleInputChange(ev.target.value)}
      />
    </form>
  );
};
