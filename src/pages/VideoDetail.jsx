import React from "react";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import { useYoutubeApi } from "../context/youtubeContext";

export default function VideoDetail() {
  const { videoId } = useParams();
  const location = useLocation();
  const youtube = useYoutubeApi();
  const {video} = location.state;
  const {
    data: channel,
    isLoading,
    error,
  } = useQuery(["videos"], () => youtube.channel(video.snippet.channelId), {
    staleTime: 1000 * 60 * 10,
  });
  console.log(channel)

  return (
    <div className="flex w-full pb-10">
      <div className="w-9/12 ">
        <iframe
          className="w-full"
          id="player"
          type="text/html"
          title="test"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${videoId}`}
    
        ></iframe>
        <h2 className="font-semibold text-2xl mt-5">{video.snippet.title}</h2>
        <span className="flex mt-6">
          {channel&&(
            <>
          <img className=" rounded-full" src={channel.snippet.thumbnails.medium.url} width="40" height="40" alt={channel.snippet.title} />
          <p className="ml-4 text-xl">{channel.snippet.title}</p>
          </>
          )}
        </span>
        <div className="mt-4">
          {video.snippet.description}
        </div>
      </div>
      <div className="w-3/12 bg-red-500"></div>
    </div>
  );
}
