import React from 'react';
import { useQuery } from 'react-query';
import { useYoutubeApi } from '../context/youtubeContext';
import RelatedVideoCard from './RelatedVideoCard';

export default function RelatedVideoList({videoId}) {
    const youtube = useYoutubeApi();

    const {
        data: relatedVideos,
        isLoading,
        error,
      } = useQuery(["related", videoId], () => youtube.related(videoId), {
        staleTime: 1000 * 60 * 10,
      });
    
    return (
        <>
        {isLoading && <p> loading... </p>}
        { error && <p> error </p>}
        {relatedVideos && relatedVideos.length > 0&&relatedVideos.map((video) => (
          <RelatedVideoCard video={video} key={video.id}/>
        ))}
        </>

    );
}

