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

export function FilterBar() {
  return (
    <Accordion type="single" collapsible className="w-1/4">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <p className="text-2xl font-light">Categories</p>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col mt-3">
          <div className="flex flex-col space-y-4 ">
            <CheckboxItem id="" text="item item testing" />
            <CheckboxItem id="" text="item item testing" />
            <CheckboxItem id="" text="item item testing" />
            <CheckboxItem id="" text="item item testing" />
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          <p className="text-2xl font-light">Availability</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col space-y-4 ">
            <CheckboxItem id="" text="item item testing" />
            <CheckboxItem id="" text="item item testing" />
            <CheckboxItem id="" text="item item testing" />
            <CheckboxItem id="" text="item item testing" />
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
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
              />
            </div>
          </div>
          <Button className="w-full my-3">Filter</Button>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>
          <p className="text-2xl font-light">Color</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col space-y-4 ">
            <CheckboxItem id="" text="item item testing" />
            <CheckboxItem id="" text="item item testing" />
            <CheckboxItem id="" text="item item testing" />
            <CheckboxItem id="" text="item item testing" />
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>
          <p className="text-2xl font-light">Size</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col space-y-4 ">
            <CheckboxItem id="" text="item item testing" />
            <CheckboxItem id="" text="item item testing" />
            <CheckboxItem id="" text="item item testing" />
            <CheckboxItem id="" text="item item testing" />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
