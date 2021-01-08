import React from "react";

export default () => (
  <svg height="80%" viewBox="0 0 706 657" className="absolute">
    <g filter="url(#filter0_d)">
      <path
        d="M474.292 648.977L36.1317 148.093L296.208 27.0825L474.292 648.977Z"
        fill="#0094FF"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0.710938"
        y="-43.5605"
        width="705.099"
        height="700.538"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx="4" dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
