import { moviesType, tvType } from "../category/services/types";

type TagProps = {
  id: number;
  type?: string;
};

export const Tag = ({ id, type }: TagProps) => {
  if (!type) return null;

  const tagType = type === "tv" ? tvType : moviesType;

  return (
    <div className="text-tag rounded-md bg-white px-[8px] py-[1px] text-sm font-medium">
      {tagType[id]}
    </div>
  );
};
