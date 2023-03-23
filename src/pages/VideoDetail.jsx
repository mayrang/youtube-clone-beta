import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function VideoDetail() {
  const { videoId } = useParams();
  const location = useLocation();
  const {video} = location.state;

  return (
    <div className="flex h-screen w-full">
      <div className="w-9/12 bg-white">
        <iframe
          className="w-full"
          id="player"
          type="text/html"
          title="test"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${videoId}`}
    
        ></iframe>
      </div>
      <div className="w-3/12 bg-red-500"></div>
    </div>
  );
}
