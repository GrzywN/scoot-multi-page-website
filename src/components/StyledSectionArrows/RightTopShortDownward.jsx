import React from "react";
import { RightDownwardArrow } from "../Patterns";

function RightTopShortDownward() {
  return (
    <>
      <RightDownwardArrow
        className="
        absolute top-0 left-0 translate-x-[-11.5625rem] translate-y-[-0.5rem]
        md:translate-x-[-16.25rem] md:translate-y-0
        "
      />
      <RightDownwardArrow
        className="
        absolute top-0 left-0 hidden rotate-180 -scale-y-100
        md:block md:translate-x-[calc(-16.25rem-100%)]
        "
      />
    </>
  );
}

export default RightTopShortDownward;
