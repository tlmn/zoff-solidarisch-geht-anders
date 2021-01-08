import React from "react";

export default ({ children, fillColor, textColor, rotationDeg = 0 }) => (
  <div className="relative inline-block">
    <div className={`text-${textColor} z-20 relative`}>{children}</div>
    <div
      className={`bg-${fillColor} absolute inline top-0 left-0`}
      style={{
        height: "95%",
        width: "calc(100% + 1rem)",
        transform: `rotate(${rotationDeg}deg)`,
        marginLeft: "-0.3rem",
      }}
    ></div>
  </div>
);
