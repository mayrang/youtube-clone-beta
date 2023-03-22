import React from "react";

export default function VideoCard({ video }) {
  console.log(video);
  return (
    <li className="w-full h-64 p-3 my-2">
      <img src={video.snippet.thumbnails.default?.url} alt="thumbnail" className="w-full h-3/4 bg-cover" />
      <span className=" overflow-hidden leading-6 mt-1 text-lg  text-ellipsis line-clamp-2">{video.snippet.title}</span>
      <div className="flex flex-col text-gray-300 text-xs mt-2">
        <span>{video.snippet.channelTitle}</span>
        <span>{video.snippet.publishedAt}</span>
      </div>
    </li>
  );
}
