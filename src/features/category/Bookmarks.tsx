import { Spinner } from "../ui/Spinner";
import { Bookmark } from "./Bookmark";
import { useGetBookmarks } from "./queries/useGetBookmarks";

export const Bookmarks = () => {
  const { bookmarks, isLoading } = useGetBookmarks();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="grid grid-cols-5 gap-4">
      {bookmarks?.map((bookmark) => {
        return <Bookmark key={bookmark.id} {...bookmark} />;
      })}
    </div>
  );
};
