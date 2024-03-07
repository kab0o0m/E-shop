"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const ProductCarousel = () => {
  const [imageSrc, setImageSrc] = useState("/img/iphone-home.png");
  const changeImage = (imgSrc) => {
    setImageSrc(imgSrc);
  };
  const productArray = [
    "/img/iphone-home.png",
    "/img/applewatch-home.png",
    "/img/iphone-home.png",
    "/img/applewatch-home.png",
    "/img/iphone-home.png",
  ];
  return (
    <Card className="pt-5 w-5/12 ">
      <CardContent>
        <Image
          alt={imageSrc}
          width={650}
          height={600}
          src={imageSrc}
          className="rounded-md"
        />
        <div className="my-6" />

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {productArray.map((link, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="w-fit border-0 ">
                    <div onClick={() => changeImage(link)}>
                      <Image
                        alt="/img/applewatch-home.png"
                        width={200}
                        height={200}
                        src={link}
                        className="rounded-md"
                      />
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default ProductCarousel;
