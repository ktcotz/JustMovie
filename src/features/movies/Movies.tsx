import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMovies } from "./useMovies";
import { Movie } from "./Movie";
import { Spinner } from "../ui/Spinner";

export const Movies = () => {
  const { trendingMovies, isLoading } = useMovies();

  if (isLoading) return <Spinner />;

  return (
    <>
      <h2 className="text-3xl font-normal text-slate-300">Trending</h2>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        autoPlay
        centerMode={false}
        className=""
        dotListClass=""
        draggable={true}
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        partialVisible
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 100,
          },
          mobile: {
            breakpoint: {
              max: 550,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 90,
          },
          tablet: {
            breakpoint: {
              max: 1150,
              min: 550,
            },
            items: 2,
            partialVisibilityGutter: 60,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {trendingMovies?.results.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </Carousel>
    </>
  );
};
