import { AccordionItem, AccordionItemData } from "./AccordionItem";

type AccordionListProps = {
  data: readonly AccordionItemData[];
  currentOpen: number | null;
  toggleAccordion: (id: number) => void;
};

export const AccordionList = ({
  data,
  currentOpen,
  toggleAccordion,
}: AccordionListProps) => {
  return (
    <ul className="flex list-none flex-col gap-4">
      {data.map((accordion) => (
        <AccordionItem
          {...accordion}
          key={accordion.id}
          currentOpen={currentOpen}
          toggleAccordion={toggleAccordion}
        />
      ))}
    </ul>
  );
};
