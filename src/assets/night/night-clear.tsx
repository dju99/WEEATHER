import React from "react";

export default function NightClear() {
  return (
    <svg viewBox="27 -2 30 30" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="blur" x="-.3038" y="-.3318" width="1.6076" height="1.894">
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
            @keyframes am-weather-moon {
              0% { transform: rotate(0deg); }
              50% { transform: rotate(15deg); }
              100% { transform: rotate(0deg); }
            }

            .am-weather-moon {
              animation-name: am-weather-moon;
              animation-duration: 6s;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
              transform-origin: 12.5px 15.15px 0;
            }

            @keyframes am-weather-moon-star-1 {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }

            .am-weather-moon-star-1 {
              animation-name: am-weather-moon-star-1;
              animation-delay: 3s;
              animation-duration: 5s;
              animation-timing-function: linear;
              animation-iteration-count: 1;
            }

            @keyframes am-weather-moon-star-2 {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }

            .am-weather-moon-star-2 {
              animation-name: am-weather-moon-star-2;
              animation-delay: 5s;
              animation-duration: 4s;
              animation-timing-function: linear;
              animation-iteration-count: 1;
            }
          `}
        </style>
      </defs>
      <g id="night" transform="translate(-4,-18)" filter="url(#blur)">
        <g transform="matrix(.8 0 0 .78534 36 20.022)" strokeWidth="1.2616">
          <g className="am-weather-moon-star-1">
            <polygon points="4 2.7 5.2 3.3 4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7 3.3 1.5" fill="white" strokeMiterlimit="10" strokeWidth="1.4105" />
          </g>
          <g className="am-weather-moon-star-2">
            <polygon
              transform="translate(20,10)"
              points="4 2.7 5.2 3.3 4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7 3.3 1.5"
              fill="white"
              strokeMiterlimit="10"
              strokeWidth="1.4105"
            />
          </g>
          <g className="am-weather-moon">
            <path
              d="m14.5 13.2c0-3.7 2-6.9 5-8.7-1.5-0.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-0.5 5-1.3-3-1.7-5-5-5-8.7z"
              fill="white"
              stroke="white"
              strokeLinejoin="round"
              strokeWidth="2.5232"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
