import { useTranslation } from "react-i18next";
import { moviesType, tvType } from "../category/services/types";

type TagProps = {
  id: number;
  type?: string;
};

export const Tag = ({ id, type }: TagProps) => {
  const { t } = useTranslation();

  if (!type) return null;

  const tagType = type === "tv" ? tvType : moviesType;
  const typedID = id as keyof typeof moviesType & keyof typeof tvType;

  return (
    <div className="text-tag rounded-md bg-white px-[8px] py-[1px] text-sm font-medium">
      {t(tagType[typedID])}
    </div>
  );
};
