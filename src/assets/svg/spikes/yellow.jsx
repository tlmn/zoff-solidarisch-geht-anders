import React from "react";

export default () => (
  <svg height="30%" viewBox="0 0 668 738" className="absolute">
    <g filter="url(#filter0_d)">
      <path
        d="M403.171 0.919424L41.1333 567.091L318.294 648.059L403.171 0.919424Z"
        fill="#FFE81D"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0.466797"
        y="0.919434"
        width="667.325"
        height="736.544"
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
