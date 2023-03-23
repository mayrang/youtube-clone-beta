import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const { videoId } = useParams();

  return (
    <div className="flex h-full w-full">
      <div className="w-9/12 bg-white">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          className=""
          type="text/html"
          id="player"
          width="560"
          height="315"
          title="player"
          frameborder="0"
        ></iframe>
      </div>
      <div className="w-3/12 bg-red-500"></div>
    </div>
  );
}
