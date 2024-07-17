import { useEffect } from "react";
import { PaginatedCategories } from "../../features/category/PaginatedCategories";
import { useUrlPaginatedCategory } from "../../features/category/queries/useParamsPaginatedCategory";
import { useNavigate } from "react-router";
import { RouterRoutes } from "../../types/routes";

export const DashboardSeeMore = () => {
  const query = useUrlPaginatedCategory();
  const navigate = useNavigate();
  console.log(query);

  useEffect(() => {
    if (query === null) {
      navigate(RouterRoutes.DASHBOARD);
    }
  }, [query, navigate]);

  return (
    query && (
      <div>
        <span className="mb-8 block h-[1px] w-full bg-slate-700">&nbsp;</span>
        <div className="pr-3 sm:pr-0">
          <PaginatedCategories {...query} />
        </div>
      </div>
    )
  );
};
