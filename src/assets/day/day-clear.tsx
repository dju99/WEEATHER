import React from "react";

export default function DayFewCloud() {
  return (
    <svg viewBox="-4.2 -5.5 40 40" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="blur" x="-.34167" y="-.34167" width="1.6833" height="1.85">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA slope="0.05" type="linear" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <style type="text/css">
          {`
            /*
            ** SUN
            */
            @keyframes am-weather-sun {
              0% {
                transform: rotate(0deg);
              }

              100% {
                transform: rotate(360deg);
              }
            }

            .am-weather-sun {
              animation-name: am-weather-sun;
              animation-duration: 9s;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }

            @keyframes am-weather-sun-shiny {
              0% {
                stroke-dasharray: 3px 10px;
                stroke-dashoffset: 0px;
              }

              50% {
                stroke-dasharray: 0.1px 10px;
                stroke-dashoffset: -1px;
              }

              100% {
                stroke-dasharray: 3px 10px;
                stroke-dashoffset: 0px;
              }
            }

            .am-weather-sun-shiny line {
              animation-name: am-weather-sun-shiny;
              animation-duration: 2s;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }
          `}
        </style>
      </defs>
      <g transform="translate(16,-2)" filter="url(#blur)">
        <g transform="translate(0,16)">
          <g className="am-weather-sun">
            <line transform="translate(0,9)" y2="3" fill="none" stroke="yellow" strokeLinecap="round" strokeWidth="2" />
            <g transform="rotate(45)">
              <line transform="translate(0,9)" y2="3" fill="none" stroke="yellow" strokeLinecap="round" strokeWidth="2" />
            </g>
            <g transform="rotate(90)">
              <line transform="translate(0,9)" y2="3" fill="none" stroke="yellow" strokeLinecap="round" strokeWidth="2" />
            </g>
            <g transform="rotate(135)">
              <line transform="translate(0,9)" y2="3" fill="none" stroke="yellow" strokeLinecap="round" strokeWidth="2" />
            </g>
            <g transform="scale(-1)">
              <line transform="translate(0,9)" y2="3" fill="none" stroke="yellow" strokeLinecap="round" strokeWidth="2" />
            </g>
            <g transform="rotate(225)">
              <line transform="translate(0,9)" y2="3" fill="none" stroke="yellow" strokeLinecap="round" strokeWidth="2" />
            </g>
            <g transform="rotate(-90)">
              <line transform="translate(0,9)" y2="3" fill="none" stroke="yellow" strokeLinecap="round" strokeWidth="2" />
            </g>
            <g transform="rotate(-45)">
              <line transform="translate(0,9)" y2="3" fill="none" stroke="yellow" strokeLinecap="round" strokeWidth="2" />
            </g>
            <circle r="5" fill="yellow" stroke="yellow" strokeWidth="2" />
          </g>
        </g>
      </g>
    </svg>
  );
}
