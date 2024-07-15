import { useTranslation } from "react-i18next";
import { Spinner } from "../ui/Spinner";
import { Bookmark } from "./Bookmark";
import { useGetBookmarks } from "./queries/useGetBookmarks";
import { Wrapper } from "../ui/Wrapper";

export const Bookmarks = () => {
  const { bookmarks, isLoading } = useGetBookmarks();
  const { t } = useTranslation();

  if (isLoading) {
    return <Spinner />;
  }

  const series = bookmarks?.filter((bookmark) => bookmark.type === "tv");
  const movies = bookmarks?.filter((bookmark) => bookmark.type === "movie");

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl">{t("movies.movie")}</h2>
      <Wrapper type="movies">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
          {movies?.map((movie) => <Bookmark key={movie.id} {...movie} />)}
        </div>
      </Wrapper>
      <h2 className="text-2xl">{t("movies.tv-serie")}</h2>
      <Wrapper type="movies">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
          {series?.map((serie) => <Bookmark key={serie.id} {...serie} />)}
        </div>
      </Wrapper>
    </div>
  );
};
