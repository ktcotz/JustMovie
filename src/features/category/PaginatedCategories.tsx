import { useCategory } from "./mutations/useCategory";
import { Spinner } from "../ui/Spinner";
import { Category } from "./Category";
import { Pagination } from "../ui/Pagination";
import { MoviesCategory, TVCategory } from "./services/types";
import { DashboardType } from "./CategoryDashboard";
import { useTranslation } from "react-i18next";
import { Wrapper } from "../ui/Wrapper";

type PaginatedCategoriesProps = {
  category: MoviesCategory | TVCategory;
  type: DashboardType;
  page: number;
};

export const PaginatedCategories = ({
  category,
  type,
  page,
}: PaginatedCategoriesProps) => {
  const { data, isLoading } = useCategory({
    category,
    type,
    page,
  });
  const { t } = useTranslation();

  if (isLoading) return <Spinner />;

  if (!data) return null;

  return (
    <div className="flex flex-col gap-16">
      <h1 className="text-3xl">{t(`movies.${category}`)}</h1>
      <Wrapper type="movies">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
          {data.results.map((result) => (
            <Category {...result} key={result.id} type={type} />
          ))}
        </div>
      </Wrapper>
      <Pagination currentPage={page} total_pages={data.total_pages} />
    </div>
  );
};
