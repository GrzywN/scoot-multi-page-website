import React from "react";
import { LeftDownwardArrow } from "/src/common/components/Patterns";

function TopShortLeftDownwardArrow() {
  return (
    <>
      <LeftDownwardArrow
        className="
        absolute top-0 right-0 translate-x-[32.625rem]
        md:translate-x-[34.0625rem] md:translate-y-[5rem]"
      />
      <LeftDownwardArrow
        className="
        absolute top-0 right-0 hidden rotate-180 -scale-y-100
        md:block md:translate-x-[calc(34.0625rem+100%)] md:translate-y-[5rem]"
      />
    </>
  );
}

export default TopShortLeftDownwardArrow;
