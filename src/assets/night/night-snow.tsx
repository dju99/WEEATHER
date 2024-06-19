import React from "react";

export default function NightSnow() {
  return (
    <svg viewBox="0 -4 56 48" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="blur" x="-.20655" y="-.23099" width="1.403" height="1.5634">
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
      </defs>
      <style type="text/css">
        {`      /*
** CLOUDS
*/
      @keyframes am-weather-cloud-2 {
        0% {
          -webkit-transform: translate(0px, 0px);
          -moz-transform: translate(0px, 0px);
          -ms-transform: translate(0px, 0px);
          transform: translate(0px, 0px);
        }

        50% {
          -webkit-transform: translate(2px, 0px);
          -moz-transform: translate(2px, 0px);
          -ms-transform: translate(2px, 0px);
          transform: translate(2px, 0px);
        }

        100% {
          -webkit-transform: translate(0px, 0px);
          -moz-transform: translate(0px, 0px);
          -ms-transform: translate(0px, 0px);
          transform: translate(0px, 0px);
        }
      }

      .am-weather-cloud-2 {
        -webkit-animation-name: am-weather-cloud-2;
        -moz-animation-name: am-weather-cloud-2;
        animation-name: am-weather-cloud-2;
        -webkit-animation-duration: 3s;
        -moz-animation-duration: 3s;
        animation-duration: 3s;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        -moz-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
      }

      /*
** MOON
*/
      @keyframes am-weather-moon {
        0% {
          -webkit-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          transform: rotate(0deg);
        }

        50% {
          -webkit-transform: rotate(15deg);
          -moz-transform: rotate(15deg);
          -ms-transform: rotate(15deg);
          transform: rotate(15deg);
        }

        100% {
          -webkit-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          transform: rotate(0deg);
        }
      }

      .am-weather-moon {
        -webkit-animation-name: am-weather-moon;
        -moz-animation-name: am-weather-moon;
        -ms-animation-name: am-weather-moon;
        animation-name: am-weather-moon;
        -webkit-animation-duration: 6s;
        -moz-animation-duration: 6s;
        -ms-animation-duration: 6s;
        animation-duration: 6s;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
        -ms-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        -moz-animation-iteration-count: infinite;
        -ms-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-transform-origin: 12.5px 15.15px 0;
        /* TODO FF CENTER ISSUE */
        -moz-transform-origin: 12.5px 15.15px 0;
        /* TODO FF CENTER ISSUE */
        -ms-transform-origin: 12.5px 15.15px 0;
        /* TODO FF CENTER ISSUE */
        transform-origin: 12.5px 15.15px 0;
        /* TODO FF CENTER ISSUE */
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
        -webkit-animation-name: am-weather-moon-star-1;
        -moz-animation-name: am-weather-moon-star-1;
        -ms-animation-name: am-weather-moon-star-1;
        animation-name: am-weather-moon-star-1;
        -webkit-animation-delay: 3s;
        -moz-animation-delay: 3s;
        -ms-animation-delay: 3s;
        animation-delay: 3s;
        -webkit-animation-duration: 5s;
        -moz-animation-duration: 5s;
        -ms-animation-duration: 5s;
        animation-duration: 5s;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
        -ms-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: 1;
        -moz-animation-iteration-count: 1;
        -ms-animation-iteration-count: 1;
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
        -webkit-animation-name: am-weather-moon-star-2;
        -moz-animation-name: am-weather-moon-star-2;
        -ms-animation-name: am-weather-moon-star-2;
        animation-name: am-weather-moon-star-2;
        -webkit-animation-delay: 5s;
        -moz-animation-delay: 5s;
        -ms-animation-delay: 5s;
        animation-delay: 5s;
        -webkit-animation-duration: 4s;
        -moz-animation-duration: 4s;
        -ms-animation-duration: 4s;
        animation-duration: 4s;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
        -ms-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: 1;
        -moz-animation-iteration-count: 1;
        -ms-animation-iteration-count: 1;
        animation-iteration-count: 1;
      }

      /*
** SNOW
*/
      @keyframes am-weather-snow {
        0% {
          -webkit-transform: translateX(0) translateY(0);
          -moz-transform: translateX(0) translateY(0);
          -ms-transform: translateX(0) translateY(0);
          transform: translateX(0) translateY(0);
        }

        33.33% {
          -webkit-transform: translateX(-1.2px) translateY(2px);
          -moz-transform: translateX(-1.2px) translateY(2px);
          -ms-transform: translateX(-1.2px) translateY(2px);
          transform: translateX(-1.2px) translateY(2px);
        }

        66.66% {
          -webkit-transform: translateX(1.4px) translateY(4px);
          -moz-transform: translateX(1.4px) translateY(4px);
          -ms-transform: translateX(1.4px) translateY(4px);
          transform: translateX(1.4px) translateY(4px);
          opacity: 1;
        }

        100% {
          -webkit-transform: translateX(-1.6px) translateY(6px);
          -moz-transform: translateX(-1.6px) translateY(6px);
          -ms-transform: translateX(-1.6px) translateY(6px);
          transform: translateX(-1.6px) translateY(6px);
          opacity: 0;
        }
      }

      .am-weather-snow-1 {
        -webkit-animation-name: am-weather-snow;
        -moz-animation-name: am-weather-snow;
        -ms-animation-name: am-weather-snow;
        animation-name: am-weather-snow;
        -webkit-animation-duration: 2s;
        -moz-animation-duration: 2s;
        -ms-animation-duration: 2s;
        animation-duration: 2s;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
        -ms-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        -moz-animation-iteration-count: infinite;
        -ms-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
      }

      .am-weather-snow-2 {
        -webkit-animation-name: am-weather-snow;
        -moz-animation-name: am-weather-snow;
        -ms-animation-name: am-weather-snow;
        animation-name: am-weather-snow;
        -webkit-animation-delay: 1.2s;
        -moz-animation-delay: 1.2s;
        -ms-animation-delay: 1.2s;
        animation-delay: 1.2s;
        -webkit-animation-duration: 2s;
        -moz-animation-duration: 2s;
        -ms-animation-duration: 2s;
        animation-duration: 2s;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
        -ms-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        -moz-animation-iteration-count: infinite;
        -ms-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
      }
`}
      </style>
      <g transform="translate(16,-2)" filter="url(#blur)">
        <g transform="matrix(.8 0 0 .8 16 4)">
          <g className="am-weather-moon">
            <path
              d="m14.5 13.2c0-3.7 2-6.9 5-8.7-1.5-0.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-0.5 5-1.3-3-1.7-5-5-5-8.7z"
              fill="white"
              stroke="white"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
          <g className="am-weather-moon-star-1">
            <polygon points="4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7 3.3 1.5 4 2.7 5.2 3.3" fill="white" strokeMiterlimit="10" />
          </g>
          <g className="am-weather-moon-star-2">
            <polygon transform="translate(20,10)" points="4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7 3.3 1.5 4 2.7 5.2 3.3" fill="white" strokeMiterlimit="10" />
          </g>
        </g>
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
        <g className="am-weather-snow-1">
          <g transform="translate(7,28)" fill="none" stroke="#57a0ee" strokeLinecap="round">
            <line transform="translate(0,9)" y1="-2.5" y2="2.5" strokeWidth="1.2" />
            <line transform="rotate(45,-10.864,4.5)" y1="-2.5" y2="2.5" />
            <line transform="rotate(90,-4.5,4.5)" y1="-2.5" y2="2.5" />
            <line transform="rotate(135,-1.864,4.5)" y1="-2.5" y2="2.5" />
          </g>
        </g>
        <g className="am-weather-snow-2">
          <g transform="translate(16,28)" fill="none" stroke="#57a0ee" strokeLinecap="round">
            <line transform="translate(0,9)" y1="-2.5" y2="2.5" strokeWidth="1.2" />
            <line transform="rotate(45,-10.864,4.5)" y1="-2.5" y2="2.5" />
            <line transform="rotate(90,-4.5,4.5)" y1="-2.5" y2="2.5" />
            <line transform="rotate(135,-1.864,4.5)" y1="-2.5" y2="2.5" />
          </g>
        </g>
      </g>
    </svg>
  );
}
