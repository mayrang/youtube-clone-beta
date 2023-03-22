import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/youtubeContext";

export default function Videos() {
  const youtube = useYoutubeApi();
  const { keyword } = useParams();
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery(["videos", keyword], () => youtube.search(keyword), {
    staleTime: 1000 * 60 * 10,
  });
  console.log(error);

  return (
    <div>
      {isLoading && <p> loading... </p>}
      {error && <p> error </p>}
      <div className="flex items-center justify-center">
        <ul className="grid w-full max-w-[1260px] xl:grid-cols-4 lg:grid-cols-3  grid-cols-2">
          {videos && videos.map((item) => <VideoCard key={item.key} video={item} />)}
        </ul>
      </div>
    </div>
  );
}
