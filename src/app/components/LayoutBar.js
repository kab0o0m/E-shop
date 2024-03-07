import React from "react";
import { SiWindows } from "react-icons/si";
import { ComboBox } from "./ComboBox";
const LayoutBar = () => {
  return (
    <div>
      <div className="w-full h-[70px] border-b flex flex-row justify-between px-64 items-center">
        <SiWindows color="gray" />
        <div className="flex flex-row space-x-5 items-center">
          <p>Showing results 1-8 of 8</p>
          <p>Sort by:</p>
          <ComboBox />
        </div>
      </div>
    </div>
  );
};

export default LayoutBar;
