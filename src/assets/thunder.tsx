import React from "react";

export default function Thunder() {
  return (
    <svg viewBox="0 0 56 48" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="blur" x="-.24684" y="-.19575" width="1.4937" height="1.4959">
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
        <style>
          {`    /*
    ** CLOUDS
    */
    @keyframes am-weather-cloud-1 {
      0% {
        transform: translate(-5px,0px);
      }
    
      50% {
        transform: translate(10px,0px);
      }
    
      100% {
        transform: translate(-5px,0px);
      }
    }
    
    .am-weather-cloud-1 {
      animation: am-weather-cloud-1 7s linear infinite;
    }
    
    @keyframes am-weather-cloud-2 {
      0% {
        transform: translate(0px,0px);
      }
    
      50% {
        transform: translate(2px,0px);
      }
    
      100% {
        transform: translate(0px,0px);
      }
    }
    
    .am-weather-cloud-2 {
      animation: am-weather-cloud-2 3s linear infinite;
    }
    
    /*
    ** STROKE
    */
    @keyframes am-weather-stroke {
      0%, 4%, 8%, 12%, 16%, 20%, 24%, 28% {
        transform: translate(0.0px,0.0px);
      }
    
      2%, 6%, 10%, 14%, 18% {
        transform: translate(0.3px,0.0px);
      }
    
      22% {
        transform: translate(1px,0.0px);
      }
    
      40% {
        fill: yellow;
        transform: translate(0.0px,0.0px);
      }
    
      65% {
        fill: white;
        transform: translate(-1px,5.0px);
      }
    
      61% {
        fill: yellow;
      }
    
      100% {
        transform: translate(0.0px,0.0px);
      }
    }
    
    .am-weather-stroke {
      animation: am-weather-stroke 1.11s linear infinite;
    }
        `}
        </style>
      </defs>
      <g id="thunder" transform="translate(-4,-12)" filter="url(#blur)">
        <g transform="translate(20,10)">
          <g className="am-weather-cloud-1">
            <path
              transform="matrix(.6 0 0 .6 -10 -6)"
              d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
              fill="#91c0f8"
              stroke="#fff"
              strokeLinejoin="round"
              strokeWidth="1.2"
            />
          </g>
          <path
            transform="translate(-20,-11)"
            d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
            fill="#57a0ee"
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <g transform="matrix(1.2,0,0,1.2,-4,28)">
            <polygon className="am-weather-stroke" points="11.1 6.9 14.3 -2.9 20.5 -2.9 16.4 4.3 20.3 4.3 11.5 14.6 14.9 6.9" fill="yellow" stroke="#fff" />
          </g>
        </g>
      </g>
    </svg>
  );
}
