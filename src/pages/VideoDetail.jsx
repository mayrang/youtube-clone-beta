import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const { videoId } = useParams();

  return (
    <div className="flex h-full w-full">
      <div className="w-9/12 bg-white">
        <iframe
          id="player"
          type="text/html"
          title="test"
          width="640"
          height="360"
          src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
          frameborder="0"
        ></iframe>
      </div>
      <div className="w-3/12 bg-red-500"></div>
    </div>
  );
}
