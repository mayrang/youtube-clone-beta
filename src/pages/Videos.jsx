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
    <div className="pt-14">
      {isLoading && <p> loading... </p>}
      {error && <p> error </p>}
      <ul>{videos && videos.map((item) => <VideoCard key={item.key} video={item} />)}</ul>
    </div>
  );
}
