export const MovieDescription = () => {
  return (
    <>
      <ul className="flex items-center gap-2 text-sm text-slate-300">
        <li className="">2019</li>
        <li className="h-1 w-1 rounded-full bg-slate-500">&nbsp;</li>
        <li className="flex items-center gap-2">
          <img src="./images/icon-category-movie.svg" alt="Movie" />
          <span>Movie</span>
        </li>
        <li className="h-1 w-1 rounded-full bg-slate-500">&nbsp;</li>
        <p>PG</p>
      </ul>
      <h2 className="text-xl lg:text-2xl">Beyond Earth</h2>
    </>
  );
};
