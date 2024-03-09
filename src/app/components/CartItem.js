import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CartItem = ({ name, quantity, imageLink, price }) => {
  return (
    <div className="">
      <div className="flex flex-row items-center">
        <Image alt={name} src={imageLink} width={100} height={100} />
        <div className="flex flex-col">
          <h1 className="text-lg">{name}</h1>
          <div className="flex flex-row space-x-2">
            <h1 className="font-light text-lg">{quantity}</h1>
            <h1 className="font-light"> x </h1>
            <h1 className="font-semibold text-lg text-gray-700">${price}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
