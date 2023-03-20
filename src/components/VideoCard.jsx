import React from 'react';

export default function VideoCard({video}) {
    console.log(video)
    return (
        <li>
        {video.snippet.title}
        </li>
    );
}

