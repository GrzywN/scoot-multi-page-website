import React from "react";
import { LeftDownwardArrow } from "/src/common/components/Patterns";

function BottomLongLeftDownwardArrow() {
  return (
    <>
      <LeftDownwardArrow
        className="
        absolute top-0 right-0 translate-x-[24.5rem] translate-y-[10.3125rem]
        md:translate-x-[10.4375rem] md:translate-y-[18.75rem]"
      />
      <LeftDownwardArrow
        className="
        absolute top-0 right-0 hidden rotate-180 -scale-y-100
        md:block md:translate-y-[18.75rem] md:translate-x-[calc(10.4375rem+100%)]"
      />
    </>
  );
}

export default BottomLongLeftDownwardArrow;
