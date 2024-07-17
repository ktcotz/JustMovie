import { useTranslation } from "react-i18next";
import { Pagination } from "../ui/Pagination";
import { Spinner } from "../ui/Spinner";
import { Wrapper } from "../ui/Wrapper";
import { Category } from "./Category";
import { useGetQueryCategory } from "./queries/useGetQueryCategory";

type QueryCategoriesProps = {
  query: string;
  page: number;
};

export const QueryCategories = ({ query, page }: QueryCategoriesProps) => {
  const { data, isLoading } = useGetQueryCategory({ page, query });
  const { t } = useTranslation();

  if (isLoading) return <Spinner />;
  if (!data) return null;

  return (
    <div className="flex flex-col gap-16">
      <h1 className="text-3xl">
        {t("search.by")}: {query}
      </h1>
      <Wrapper type="movies">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
          {data.results.map((result) => (
            <Category {...result} key={result.id} type="movie" />
          ))}
        </div>
      </Wrapper>
      <Pagination currentPage={page} total_pages={data.total_pages} />
    </div>
  );
};
