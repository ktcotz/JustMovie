import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

type CategoryRatingProps = {
  vote_average: number;
};

export const CategoryRating = ({ vote_average }: CategoryRatingProps) => {
  const normalizedVote = (vote_average / 10) * 5;

  return (
    <div className="flex items-center gap-4">
      <h2 className="text-3xl">{normalizedVote.toFixed(1)}</h2>
      <Rating
        style={{ maxWidth: 180 }}
        value={normalizedVote}
        readOnly
        className="custom-rating"
      />
    </div>
  );
};
