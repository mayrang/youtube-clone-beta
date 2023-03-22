import React from "react";
import { showTime } from "../util/showTime";

export default function VideoCard({ video }) {
  console.log(video);
  return (
    <li className="w-full h-64 md:h-96 sm:h-[600px] p-2 my-2">
      <img src={video.snippet.thumbnails.default?.url} alt="thumbnail" className="w-full h-3/4 bg-cover rounded-2xl" />
      <span className=" overflow-hidden leading-6 mt-1 text-lg  text-ellipsis line-clamp-2 min-h-[50px]">
        {video.snippet.title}
      </span>
      <div className="flex flex-col text-gray-300 text-xs mt-2">
        <span>{video.snippet.channelTitle}</span>
        <span className="mt-0.5">{showTime(video.snippet.publishedAt)}</span>
      </div>
    </li>
  );
}
