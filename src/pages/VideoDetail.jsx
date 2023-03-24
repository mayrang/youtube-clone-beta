import React from "react";

import { useLocation, useParams } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";

import RelatedVideoList from "../components/RelatedVideoList";


export default function VideoDetail() {
  const { videoId } = useParams();
  const location = useLocation();

  const {video} = location.state;
  


  return (
    <div className="flex flex-col lg:flex-row w-full pb-10">
      <div className="basis-4/6 ">
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
        <ChannelInfo channelId={video.snippet.channelId} />
        <div className="mt-4 whitespace-pre-wrap">
          {video.snippet.description}
        </div>
      </div>
      <div className="basis-2/6 ml-2">
        <RelatedVideoList videoId={videoId}/>
      </div>
    </div>
  );
}
