import React, { useState } from "react";

const YouTubeHoverPlayer = ({ videoId, width = 250, height = 250}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        width,
        height,
        overflow: "hidden",
        borderRadius: "10px",
        cursor: "pointer",
      }}
       className="view"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=${isHovered ? 1 : 0}&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeHoverPlayer;
