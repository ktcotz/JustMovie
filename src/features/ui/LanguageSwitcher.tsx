export const LanguageSwitcher = () => {
  return (
    <div className="relative border bg-slate-900 text-slate-50">
      <img
        src="./images/icon-translate.svg"
        alt=""
        height={24}
        width={24}
        className="absolute left-2 top-1/2 -translate-y-1/2 invert"
      />
      <label htmlFor="language" className="sr-only">
        Choose language:
      </label>
      <select
        name="language"
        id="language"
        className="rounded-sm bg-transparent px-10 py-2 text-lg transition focus:outline-none focus:ring focus:ring-slate-50"
      >
        <option value="pl">Polski</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};
