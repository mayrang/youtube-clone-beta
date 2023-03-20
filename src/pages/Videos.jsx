import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const {keyword} = useParams();
  const {data: videos, isLoading, error} = useQuery(['videos', keyword], async () => {
    return axios.get(`/videos/${keyword ? "search" : "popular"}.json`).then((res) => {
      console.log(`/videos/${keyword ? "search" : "popular"}.json`)
      return res.data.items
    })
  }, {
    staleTime: 1000 * 60 * 10
  });

  

  return(
    <div className="pt-14">
      {isLoading && <p> loading... </p>}
      {error && <p> error </p>}
      <ul>
      {videos && videos.map((item) => (
        <VideoCard key={item.key} video={item} />
      ))}
      </ul>
      
    </div>
  )
 

  
}
