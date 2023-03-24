import React from 'react';
import { useQuery } from 'react-query';
import { useYoutubeApi } from '../context/youtubeContext';

export default function ChannelInfo({channelId}) {
    const youtube = useYoutubeApi();
    const {
        data: channel,
      } = useQuery(["videos", channelId], () => youtube.channel(channelId), {
        staleTime: 1000 * 60 * 10,
      });
    return (
        <span className="flex mt-6">
          {channel&&(
            <>
          <img className=" rounded-full" src={channel.snippet.thumbnails.medium.url} width="40" height="40" alt={channel.snippet.title} />
          <p className="ml-4 text-xl">{channel.snippet.title}</p>
          </>
          )}
        </span>
    );
}

