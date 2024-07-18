import ReactPlayer from "react-player";
import {
  GetVideoData,
  useCategoryVideo,
} from "../category/queries/useCategoryVideo";

export const Video = ({ id }: GetVideoData) => {
  const { data: video } = useCategoryVideo({ id });

  if (video && video.results.length === 0) return null;

  const currentVideo = video!.results[0];

  return (
    <div className="my-16 flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl">{currentVideo.name}</h1>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${currentVideo.key}`}
        playing
        controls
      />
    </div>
  );
};
