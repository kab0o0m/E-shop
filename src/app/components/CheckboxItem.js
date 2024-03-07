import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const CheckboxItem = ({ id, text }) => {
  return (
    <div className="flex flex-row space-x-2">
      <Checkbox id={`${id}`} />
      <label
        htmlFor={`${id}`}
        className="text-sm font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {text}
      </label>
    </div>
  );
};

export default CheckboxItem;
