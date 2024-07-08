import twMerge from "clsx";
import { homeAccordion } from "./data";
import { useTranslation } from "react-i18next";

export type AccordionItemData = {
  id: number;
  title: (typeof homeAccordion)[number]["title"];
  description: (typeof homeAccordion)[number]["description"];
};

type AccordionItemProps = {
  currentOpen: number | null;
  toggleAccordion: (id: number) => void;
};

export const AccordionItem = ({
  title,
  description,
  id,
  currentOpen,
  toggleAccordion,
}: AccordionItemData & AccordionItemProps) => {
  const isOpen = currentOpen === id;

  const hiddenBase =
    "max-h-0 bg-slate-800 text-slate-50 opacity-0 transition-all";

  const openBase = "max-h-[100px] opacity-100 p-4";

  const hiddenClsx = twMerge(
    hiddenBase,
    isOpen && openBase,
    isOpen ? "visible" : "invisible",
  );

  const { t } = useTranslation();

  return (
    <li className="flex flex-col gap-1 rounded-sm">
      <button
        className="bg-slate-800 p-4 text-left text-base font-semibold text-slate-50 md:text-xl"
        onClick={() => toggleAccordion(id)}
        id={`accordion-btn-${id}`}
        aria-controls={`accordion-sect-${id}`}
        aria-expanded={`${isOpen ? "true" : "false"}`}
      >
        {t(title)}
      </button>
      <div
        className={hiddenClsx}
        id={`accordion-sect-${id}`}
        aria-labelledby={`accordion-btn-${id}`}
      >
        <p>{t(description)}</p>
      </div>
    </li>
  );
};
