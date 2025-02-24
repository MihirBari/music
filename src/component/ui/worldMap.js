import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./map.css";

export function WorldMap({ dots = [], lineColor = "blue" }) {
  const svgRef = useRef(null);

  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    text: "",
  });

  const projectPoint = (lat, lng) => {
    if (typeof lat !== "number" || typeof lng !== "number")
      return { x: 0, y: 0 };
    const x = ((lng + 180) * 800) / 360; // 800 corresponds to the SVG width
    const y = ((90 - lat) * 400) / 180; // 400 corresponds to the SVG height
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const pathAnimationDuration = 3;
  const delayBetweenPaths = 2;
  const totalCycleDuration =
    dots.length * delayBetweenPaths + pathAnimationDuration;

  return (
    <div className="w-full aspect-[2/1] bg-white rounded-lg relative font-sans">
      <img
        src="https://techsawebsiteimages.s3.ap-south-1.amazonaws.com/map.svg"
        className="img1 h-full w-full pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="svg1 sw-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {/* Render paths */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: pathAnimationDuration,
                  delay: i * delayBetweenPaths,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: totalCycleDuration,
                }}
              />
            </g>
          );
        })}

        {/* Gradient definition */}
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Render start and end points */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);

          return (
            <g key={`points-group-${i}`}>
              {/* Start Point */}
              <g key={`start-${i}`}>
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="2"
                  fill={lineColor}
                />
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <rect
                  x={startPoint.x - 10}
                  y={startPoint.y - 10}
                  width="20"
                  height="20"
                  fill="transparent"
                  style={{ pointerEvents: "visible" }} // Ensure it captures events
                  onMouseEnter={() => {
                    setTooltip({
                      visible: true,
                      x: startPoint.x,
                      y: startPoint.y,
                      text: "Techsa(India)",
                    });
                  }}
                  onMouseLeave={() => {
                    setTooltip({ visible: false, x: 0, y: 0, text: "" });
                  }}
                />
              </g>

              {/* End Point */}
              <g key={`end-${i}`}>
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="2"
                  fill={lineColor}
                />
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </g>
          );
        })}
        {tooltip.visible && (
          <foreignObject
            x={tooltip.x - 20}
            y={tooltip.y - 40}
            width="100"
            height="30"
          >
            <div
              style={{
                background: "white",
                padding: "5px",
                borderRadius: "5px",
                boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                pointerEvents: "none",
                fontSize: "12px",
              }}
            >
              {tooltip.text}
            </div>
          </foreignObject>
        )}
      </svg>
    </div>
  );
}
