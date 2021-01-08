import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default ({ fillColor }) => {
  const [height, setHeight] = useState(null);
  const ref = useRef(null);

  useLayoutEffect(() => {
    setHeight(ref.current.clientHeight);
  });
  useEffect(() => {
    const resizeListener = () => {
      setHeight(ref.current.clientHeight);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <svg
      width="100%"
      viewBox="0 0 500 20"
      ref={ref}
      style={{ marginTop: -height - 1 + "px" }}
    >
      <polygon points="0,20 500,20 500,0" fill={fillColor} />
    </svg>
  );
};
