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
    <div className="mx-auto my-16 flex h-[500px] max-w-[800px] flex-col items-center justify-center gap-8">
      <h1 className="text-3xl">{currentVideo.name}</h1>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${currentVideo.key}`}
        playing
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
};
