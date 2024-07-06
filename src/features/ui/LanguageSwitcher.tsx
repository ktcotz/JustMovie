export const LanguageSwitcher = () => {
  return (
    <div className="relative bg-slate-900 text-slate-50 border border-slate-50 rounded-sm">
      <img
        src="./images/icon-translate.svg"
        alt=""
        height={24}
        width={24}
        className="absolute top-1/2 left-2 -translate-y-1/2 invert"
      />
      <label htmlFor="language" className="sr-only">
        Choose language:
      </label>
      <select
        name="language"
        id="language"
        className="px-10 py-2 bg-transparent text-lg"
      >
        <option value="pl">Polski</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};
