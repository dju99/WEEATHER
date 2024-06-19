import React from "react";

export default function Rain() {
  return (
    <svg viewBox="0 0 56 48" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="blur" x="-.24684" y="-.22776" width="1.4937" height="1.5756">
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
            @keyframes am-weather-rain {
              0% {
                stroke-dashoffset: 0;
              }
              100% {
                stroke-dashoffset: -100;
              }
            }

            .am-weather-rain-1 {
              animation-name: am-weather-rain;
              animation-duration: 8s;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }

            .am-weather-rain-2 {
              animation-name: am-weather-rain;
              animation-delay: 0.25s;
              animation-duration: 8s;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }

            @keyframes am-weather-cloud-3 {
              0% {
                transform: translate(0px, 0px);
              }
              50% {
                transform: translate(2px, 0px);
              }
              100% {
                transform: translate(0px, 0px);
              }
            }

            .am-weather-cloud-3 {
              animation-name: am-weather-cloud-3;
              animation-duration: 3s;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }
          `}
        </style>
      </defs>
      <g transform="translate(16,-2)" filter="url(#blur)">
        <g className="am-weather-cloud-3">
          <path
            transform="translate(-20,-11)"
            d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
            fill="#57a0ee"
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </g>
        <g className="am-weather-sleet-2" transform="translate(-20,-10) rotate(10,-247.39,200.17)" fill="none" stroke="#91c0f8" strokeLinecap="round">
          <line className="am-weather-rain-1" transform="translate(-5,1)" y2="8" strokeDasharray="0.1, 7" strokeWidth="2" />
          <line className="am-weather-rain-1" transform="translate(5)" y2="8" strokeDasharray="0.1, 7" strokeWidth="2" />
        </g>
        <g
          className="am-weather-rain-3"
          transform="translate(-20,-10) rotate(10,-245.89,217.31)"
          fill="none"
          stroke="#91c0f8"
          strokeDasharray="4, 7"
          strokeLinecap="round"
          strokeWidth="2"
        >
          <line className="am-weather-rain-1" transform="translate(-13,1)" y2="8" />
          <line className="am-weather-rain-1" transform="translate(-3,2)" y2="8" />
          <line className="am-weather-rain-2" transform="translate(7,-1)" y2="8" />
        </g>
      </g>
    </svg>
  );
}
