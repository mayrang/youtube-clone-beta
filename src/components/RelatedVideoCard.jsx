import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { showTime } from '../util/showTime';


export default function RelatedVideoCard({video}) {
    const navigate = useNavigate();
    const clickVideo=useCallback(() => {
        navigate(`/videos/watch/${video.id}`, {state: {video}})
      }, [video])
    return (
        <div className='flex items-center w-full h-60 lg:h-32 mb-2 cursor-pointer' onClick={clickVideo}>
            <img src={video.snippet.thumbnails.default.url} className="w-5/12  h-full rounded-md" alt={video.snippet.title}/>
            <div className='ml-2 w-7/12'>
                <span className=" overflow-hidden leading-6 whitespace-wrap  text-md text-ellipsis line-clamp-2 min-h-[50px]">
                    {video.snippet.title}
                </span>
                <div className="flex flex-col text-gray-300 text-xs mt-2">
                    <span>{video.snippet.channelTitle}</span>
                    <span className="mt-0.5">{showTime(video.snippet.publishedAt)}</span>
                </div>
            </div>
           
        </div>
    );
}

