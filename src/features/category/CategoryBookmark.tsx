import { Button } from "../ui/Button";
import { DashboardType } from "./CategoryDashboard";
import { useGetBookmarks } from "./queries/useGetBookmarks";
import { useManageBookmark } from "./mutations/useManageBookmark";
import { ExternalID } from "./schema/ExternalIDSchema";

type CategoryBookmarkProps = {
  id: number;
  type: DashboardType;
  data: ExternalID;
};

export type Bookmark = {
  custom_id: number;
  type: DashboardType;
  external_id: string;
};

export const CategoryBookmark = ({ id, type, data }: CategoryBookmarkProps) => {
  const { bookmarks } = useGetBookmarks();
  const { manage } = useManageBookmark();

  const manageBookmark = () => {
    if (!data.imdb_id) return;

    manage({ custom_id: id, type, external_id: data.imdb_id });
  };

  const isBookmarked = bookmarks?.filter(
    (bookmark) => bookmark.custom_id === id,
  ).length;

  return (
    <Button
      aria-label="Add to bookmarks"
      modifier="bookmark"
      onClick={manageBookmark}
    >
      <img
        src={`./images/icon-bookmark-${isBookmarked ? "full" : "empty"}.svg`}
        alt=""
        className=""
      />
    </Button>
  );
};
