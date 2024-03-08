import React from "react";
import { SiWindows } from "react-icons/si";
import { ComboBox } from "./ComboBox";

const LayoutBar = ({ noOfItems, onFilterChange }) => {
  const handleStateChange = (childState) => {
    onFilterChange(childState);
  };
  return (
    <div>
      <div className="w-full h-[70px] border-b flex flex-row justify-between px-64 items-center">
        <SiWindows color="gray" />
        <div className="flex flex-row space-x-5 items-center">
          <p>
            Showing results 1-{noOfItems} of {noOfItems}
          </p>
          <p>Sort by:</p>
          <ComboBox onFilterChange={handleStateChange} />
        </div>
      </div>
    </div>
  );
};

export default LayoutBar;
