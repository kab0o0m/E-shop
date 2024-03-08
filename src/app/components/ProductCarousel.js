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

const ProductCarousel = ({ sourceUrl }) => {
  const [imageSrc, setImageSrc] = useState(sourceUrl);
  const changeImage = (imgSrc) => {
    setImageSrc(imgSrc);
  };
  let ProductArray = [];
  for (let i = 0; i < 5; i++) ProductArray.push(sourceUrl);
  return (
    <Card className="pt-5 w-5/12 ">
      <CardContent>
        <Image
          alt={sourceUrl}
          width={450}
          height={400}
          src={imageSrc}
          className="rounded-md mx-auto aspect-square"
        />
        <div className="my-6" />

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {ProductArray.map((link, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="w-fit border-0 ">
                    <div onClick={() => changeImage(link)}>
                      <Image
                        alt={index}
                        width={200}
                        height={200}
                        src={link}
                        className="rounded-md aspect-square"
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
