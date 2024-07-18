import { Button } from "../ui/Button";
import { DashboardType } from "./CategoryDashboard";
import { useGetBookmarks } from "./queries/useGetBookmarks";
import { useManageBookmark } from "./mutations/useManageBookmark";
import { useTranslation } from "react-i18next";
import { useGetUser } from "../authentication/mutations/useGetUser";
import { User } from "@supabase/supabase-js";

type CategoryBookmarkProps = {
  id: number;
  type: DashboardType;
};

export type Bookmark = {
  custom_id: number;
  type: DashboardType;
  user_id: User["id"];
};

export const CategoryBookmark = ({ id, type }: CategoryBookmarkProps) => {
  const { user } = useGetUser();
  const { bookmarks } = useGetBookmarks();
  const { manage } = useManageBookmark();
  const { t } = useTranslation();

  const manageBookmark = () => {
    manage({
      custom_id: id,
      type,
      user_id: (user as User).id,
    });
  };

  const isBookmarked = bookmarks?.filter(
    (bookmark) => bookmark.custom_id === id,
  ).length;

  return (
    <Button
      aria-label={
        isBookmarked
          ? t("movies.remove-bookmarked")
          : t("movies.add-bookmarked")
      }
      modifier="bookmark"
      onClick={manageBookmark}
    >
      <img
        src={`./../images/icon-bookmark-${isBookmarked ? "full" : "empty"}.svg`}
        alt=""
        className=""
      />
    </Button>
  );
};
