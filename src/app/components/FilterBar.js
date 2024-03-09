"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CheckboxItem from "./CheckboxItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

export function FilterBar({
  sendCategory,
  fromValue,
  toValue,
  setFromValue,
  setToValue,
  handlePriceRange,
}) {
  const sendCategoryToParent = (category) => {
    console.log(category);
    sendCategory(category);
  };
  return (
    <Accordion
      type="multiple"
      collapsible
      className="w-1/4"
      defaultValue={["item-1", "item-2"]}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <p className="text-2xl font-light">Categories</p>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col">
          <div className="flex flex-col">
            <Button
              onClick={() => sendCategoryToParent("none")}
              variant="link"
              className="w-fit h-fit"
            >
              All products
            </Button>
            <Button
              onClick={() => sendCategoryToParent("phone")}
              variant="link"
              className="w-fit h-fit"
            >
              Phones
            </Button>
            <Button
              onClick={() => sendCategoryToParent("laptop")}
              variant="link"
              className="w-fit h-fit"
            >
              Laptops
            </Button>
            <Button
              onClick={() => sendCategoryToParent("tablet")}
              variant="link"
              className="w-fit h-fit"
            >
              Tablet
            </Button>
            <Button
              onClick={() => sendCategoryToParent("accessory")}
              variant="link"
              className="w-fit h-fit"
            >
              Accessories
            </Button>
            <Button
              onClick={() => sendCategoryToParent("watch")}
              variant="link"
              className="w-fit"
            >
              Watch
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          <p className="text-2xl font-light">Price</p>
        </AccordionTrigger>
        <AccordionContent className="">
          <div className="flex flex-row justify-between items-center">
            <div className="max-w-[140px] space-y-2">
              <Label htmlFor="From">From</Label>
              <Input
                type="text"
                id="last-name"
                name="lastName"
                placeholder="e.g. 0"
                // value={fromValue}
                onChange={(e) => setFromValue(e.target.value)}
              />
            </div>
            <div className="border-b w-5 h-0 mt-6"></div>
            <div className="max-w-[140px] space-y-2">
              <Label htmlFor="To">To</Label>
              <Input
                type="text"
                id="last-name"
                name="lastName"
                placeholder="e.g. 999"
                // value={toValue}
                onChange={(e) => setToValue(e.target.value)}
              />
            </div>
          </div>
          {/* <Button className="w-full my-3" onClick={handlePriceRange}>
            Filter
          </Button> */}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
