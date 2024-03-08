import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ProductCard = ({ imgsrc, title, category, price }) => {
  return (
    <Link
      href={`/shop/${category}/${title}`}
      className="hover:scale-105 transition ease-in-out duration-100"
    >
      <Card className="pt-5">
        <CardContent>
          <Image
            alt={imgsrc}
            width={200}
            height={250}
            src={imgsrc}
            className="rounded-md mx-auto"
          />
        </CardContent>

        <CardHeader className="-mt-5">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="font-bold text-lg">
            ${price}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};
