import { useState } from "react";
import { Wrapper } from "../ui/Wrapper";
import { AccordionItemData } from "./AccordionItem";
import { AccordionList } from "./AccordionList";
import { useTranslation } from "react-i18next";

type AccordionProps = {
  data: readonly AccordionItemData[];
};

export const Accordion = ({ data }: AccordionProps) => {
  const [currentOpen, setCurrentOpen] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setCurrentOpen(id === currentOpen ? null : id);
  };

  const { t } = useTranslation();

  return (
    <Wrapper>
      <section id="info" className="mb-16 flex flex-col gap-4">
        <h2 className="mb-10 text-center text-4xl font-semibold text-slate-50">
          {t("accordion.title")}
        </h2>
        <AccordionList
          data={data}
          currentOpen={currentOpen}
          toggleAccordion={toggleAccordion}
        />
      </section>
    </Wrapper>
  );
};
