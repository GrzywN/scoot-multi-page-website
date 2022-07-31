import React from "react";
import { LeftUpwardArrow } from "../Patterns";

function LeftBottomLongUpward() {
  return (
    <>
      <LeftUpwardArrow
        className="
        absolute top-0 right-0 translate-x-[24.5rem] translate-y-[8rem]
        md:translate-x-[10.4375rem] md:translate-y-[16.375rem]"
      />
      <LeftUpwardArrow
        className="
        absolute top-0 right-0 hidden rotate-180 -scale-y-100
        md:block md:translate-y-[16.375rem] md:translate-x-[calc(10.4375rem+100%)]"
      />
    </>
  );
}

export default LeftBottomLongUpward;
