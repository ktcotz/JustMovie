import { Button } from "../ui/Button";

export const MovieBookmark = () => {
  return (
    <Button
      aria-label="Add to bookmarks"
      modifier="bookmark"
      onClick={() => {
        console.log("HI!");
      }}
    >
      <img src="./images/icon-bookmark-empty.svg" alt="" className="" />
    </Button>
  );
};
