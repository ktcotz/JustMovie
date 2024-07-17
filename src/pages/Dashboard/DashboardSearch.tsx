import { useNavigate } from "react-router-dom";
import { QueryCategories } from "../../features/category/QueryCategories";
import { useQueryCategory } from "../../features/category/queries/useQueryCategory";
import { useEffect } from "react";
import { RouterRoutes } from "../../types/routes";

export const DashboardSearch = () => {
  const data = useQueryCategory();
  const navigate = useNavigate();

  useEffect(() => {
    if (data === null) {
      navigate(RouterRoutes.DASHBOARD);
    }
  }, [data, navigate]);

  return (
    data && (
      <div>
        <span className="mb-8 block h-[1px] w-full bg-slate-700">&nbsp;</span>
        <div className="pr-3 sm:pr-0">
          <QueryCategories {...data} />
        </div>
      </div>
    )
  );
};
