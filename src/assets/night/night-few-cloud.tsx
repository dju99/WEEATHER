import React from "react";

export default function NightFewCloud() {
  return (
    <svg viewBox="2 -6 56 48" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="blur" x="-.19471" y="-.26087" width="1.3744" height="1.6884">
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
          {`@keyframes am-weather-cloud-2 {
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

          .am-weather-cloud-2 {
            animation-name: am-weather-cloud-2;
            animation-duration: 3s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }

          @keyframes am-weather-moon {
            0% {
              transform: rotate(0deg);
            }

            50% {
              transform: rotate(15deg);
            }

            100% {
              transform: rotate(0deg);
            }
          }

          .am-weather-moon {
            animation-name: am-weather-moon;
            animation-duration: 6s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            transform-origin: 12.5px 15.15px 0;
          }

          @keyframes am-weather-moon-star-1 {
            0% {
              opacity: 0;
            }

            100% {
              opacity: 1;
            }
          }

          .am-weather-moon-star-1 {
            animation-name: am-weather-moon-star-1;
            animation-delay: 3s;
            animation-duration: 5s;
            animation-timing-function: linear;
            animation-iteration-count: 1;
          }

          @keyframes am-weather-moon-star-2 {
            0% {
              opacity: 0;
            }

            100% {
              opacity: 1;
            }
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
      <g transform="translate(16,-2)" filter="url(#blur)">
        <g transform="matrix(.8 0 0 .8 16 4)">
          <g className="am-weather-moon-star-1">
            <polygon points="1.5 3.3 2.7 2.7 3.3 1.5 4 2.7 5.2 3.3 4 4 3.3 5.2 2.7 4" fill="white" strokeMiterlimit="10" />
          </g>
          <g className="am-weather-moon-star-2">
            <polygon transform="translate(20,10)" points="1.5 3.3 2.7 2.7 3.3 1.5 4 2.7 5.2 3.3 4 4 3.3 5.2 2.7 4" fill="#fff" strokeMiterlimit="10" />
          </g>
          <g className="am-weather-moon">
            <path
              d="m14.5 13.2c0-3.7 2-6.9 5-8.7-1.5-0.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-0.5 5-1.3-3-1.7-5-5-5-8.7z"
              fill="white"
              stroke="white"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </g>
        <g className="am-weather-cloud-2">
          <path
            transform="translate(-20,-11)"
            d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
            fill="#5472d3"
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </g>
      </g>
    </svg>
  );
}