import React from 'react'
import YouTubeHoverPlayer from './Module';
const videoIds = [
    "_Tml9UpA5Vs",
    "GKlB-iY4ehU",
    "0P0MJpi3DxQ",
    "h-AQD_-gsjc",
   "Cnocxqwdh9U",
   "oI4wCSwrP6Q",
   "_DIYP1xK0Ac"
  ];

export const Resource = () => {
  return (
    <>
    <h1 style={{textAlign:"center", padding:"20px", color:"#BA9A6B"}}>Videos Archive</h1>
    <div className='youtube'>
      {videoIds.map((id, index) => (
        <YouTubeHoverPlayer key={index} videoId={id} />
      ))}
    </div>
    </>
  )
}
