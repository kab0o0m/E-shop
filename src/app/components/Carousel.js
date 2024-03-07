"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Strong, Em } from "@radix-ui/themes";
import { Playfair_Display } from "next/font/google";
const pfDisplay = Playfair_Display({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CarouselComp = () => {
  return (
    <div className="h-screen">
      <Carousel
        className="border h-4/5 bg-[#F6F6F6] "
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem className="flex flex-row justify-between p-20 px-48">
            <div className="flex-col flex">
              <p className="mt-[30%] text-orange-400 font-normal text-medium">
                - NEW RELEASE 2024 -
              </p>
              <div className={`${pfDisplay.className} text-lg font-semibold`}>
                <p className=" my-8 text-[60px]">
                  <Strong>Apple Watch</Strong>
                </p>
                <p className="my-8 text-[60px]">
                  With <Em>Big Screen</Em>.
                </p>
              </div>

              <Link href="/shop">
                <Button variant="outline">SHOP NOW</Button>
              </Link>
            </div>

            <Image
              alt=""
              width={600}
              height={600}
              src="/img/applewatch-home.png"
            ></Image>
          </CarouselItem>

          <CarouselItem className="flex flex-row justify-between p-20 px-48">
            <div className="flex-col flex">
              <p className="mt-[30%] text-orange-400 font-normal text-medium">
                - CNY 2024 DISCOUNT -
              </p>
              <div className={`${pfDisplay.className} text-lg font-semibold`}>
                <p className=" my-8 text-[60px]">
                  <Strong>iPhone</Strong>
                </p>
                <p className="my-8 text-[60px]">
                  With <Em>Big Screen</Em>.
                </p>
              </div>

              <Link href="/shop">
                <Button variant="outline">SHOP NOW</Button>
              </Link>
            </div>

            <Image
              alt=""
              width={600}
              height={600}
              src="/img/iphone-home.png"
            ></Image>
          </CarouselItem>
          <CarouselItem className="pt-20">
            <div className="showcase">
              <div className="showcase-big">
                <div className="pl-20">
                  <div
                    className={`${pfDisplay.className} text-lg font-semibold flex-col flex`}
                  >
                    <p className="my-7">
                      <Strong>New</Strong> Releases
                    </p>
                    <p className="mb-8">
                      From <Em>Apple</Em>.
                    </p>
                  </div>

                  <Link href="/shop">
                    <Button variant="outline">SHOP NOW</Button>
                  </Link>
                </div>
              </div>

              <div className="showcase-small">
                <div className="showcase-small-1">
                  <div className={`text-3xl font-medium text-[#FFCD16]`}>
                    <h2 className="speakers">Homepod</h2>
                  </div>
                </div>
                <div className="showcase-small-2">
                  <div className={` text-3xl font-medium text-[#FCE7E2]`}>
                    <h2 className="speakers">AirPods</h2>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselComp;
