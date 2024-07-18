import { useSearchParams } from "react-router-dom";
import { Video } from "../../features/ui/Video";

export const DashboardVideo = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  if (!id) return null;

  return (
    <div>
      <span className="mb-8 block h-[1px] w-full bg-slate-700">&nbsp;</span>
      <div className="pr-3 sm:pr-0">
        <Video id={id} />
      </div>
    </div>
  );
};
