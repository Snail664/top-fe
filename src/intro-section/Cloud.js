import React, { forwardRef } from "react";

const Cloud = forwardRef(({ x, y }, ref) => (
  <g ref={ref}>
    <rect
      x={`${x}` || "492.248"}
      y={`${y}` || "113.363"}
      width="264"
      height="21.4468"
      rx="10.7234"
      fill="#F5D5FF"
    />
  </g>
));

export default Cloud;
