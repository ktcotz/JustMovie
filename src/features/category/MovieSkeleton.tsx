import { useMediaQuery } from "usehooks-ts";

export const MovieSkeleton = () => {
  const isTablet = useMediaQuery("(max-width:768px)");
  const isMobile = useMediaQuery("(max-width:500px)");

  const length = isMobile ? 2 : isTablet ? 3 : 4;

  return Array.from({ length }, (_, i) => {
    return (
      <div
        key={i}
        className="mx-auto min-h-[281px] w-full max-w-sm animate-pulse rounded-2xl bg-slate-600 p-4 shadow-md"
      ></div>
    );
  });
};
