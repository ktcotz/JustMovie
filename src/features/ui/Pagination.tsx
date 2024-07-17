import { useSearchParams } from "react-router-dom";
import { Button } from "./Button";

type PaginationProps = {
  currentPage: number;
  total_pages: number;
};

export const Pagination = ({ currentPage, total_pages }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const nextPage = () => {
    searchParams.set("page", String(currentPage + 1));
    setSearchParams(searchParams);
  };

  const prevPage = () => {
    searchParams.set("page", String(currentPage - 1));
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex divide-x-[1px] divide-slate-500 rounded-md border border-slate-100">
        <Button
          modifier="pagination"
          disabled={currentPage === 1}
          onClick={prevPage}
        >
          &larr; Prev
        </Button>
        <div className="bg-white px-4 py-2 font-semibold text-tag sm:px-8 sm:py-4">
          <p>
            Page {currentPage} of {total_pages}
          </p>
        </div>
        <Button
          modifier="pagination"
          disabled={currentPage === total_pages}
          onClick={nextPage}
        >
          Next &rarr;
        </Button>
      </div>
    </div>
  );
};
