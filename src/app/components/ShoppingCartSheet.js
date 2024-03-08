import React from "react";

import axios from "axios";
import CartItem from "./CartItem";
import { MdShoppingCart } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const ShoppingCartSheet = () => {
  const [myCartItems, setMyCartItems] = useState([]);
  const getMyCartItems = async () => {
    const myCartItems = await axios.post(
      "http://localhost:8080/api/cart_item/my_cart",
      {
        sessionId: JSON.parse(localStorage.getItem("session")).id,
      }
    );
    setMyCartItems(myCartItems.data);
    console.log(myCartItems.data);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button variant="outline" onClick={getMyCartItems}>
          <MdShoppingCart size={25} className="cursor-pointer" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <ScrollArea className="h-[300px]">
          {myCartItems.map((item, index) => {
            return (
              <CartItem
                key={index}
                price={item.price}
                imageLink={item.imageLink}
                quantity={item.quantity}
                name={item.name}
              />
            );
          })}
        </ScrollArea>
        <SheetFooter>
          <div className="flex flex-col w-full space-y-5">
            <div className="border-y py-2 flex flex-row justify-between">
              <h1 className="font-light">Total: </h1>
              <h1 className="font-semibold text-lg text-gray-700">
                ${JSON.parse(localStorage.getItem("session")).total.toFixed(2)}
              </h1>
            </div>
            <SheetClose asChild>
              <Link href="/checkout" className="w-full">
                <Button className="w-full">Checkout</Button>
              </Link>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartSheet;
