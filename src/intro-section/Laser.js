import React, { forwardRef } from "react";

const Laser = forwardRef(({ x, width, height }, ref) => {
  console.log("props coming: ", height);
  return (
    <g>
      <rect
        ref={ref}
        x={x || 0}
        width={width || 45}
        height={height || 1070}
        fill="#F015C0"
        fillOpacity="0.3"
      />
    </g>
  );
});

export default Laser;
