import React from "react";

import axios from "axios";
import CartItem from "./CartItem";
import { MdShoppingCart } from "react-icons/md";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RxCross2 } from "react-icons/rx";
import { useToast } from "@/components/ui/use-toast";
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
  const { toast } = useToast();
  const [myCartItems, setMyCartItems] = useState([]);
  const [total, setTotal] = useState(null);
  const getMyCartItems = async () => {
    try {
      const sessionData = JSON.parse(localStorage.getItem("session"));
      if (sessionData && sessionData.id) {
        const response = await axios.post(
          "http://localhost:8080/api/cart_item/my_cart",
          { sessionId: sessionData.id }
        );
        setMyCartItems(response.data);
        setTotal(sessionData.total ? sessionData.total.toFixed(2) : null);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };
  useEffect(() => {
    getMyCartItems();
  });
  const removeFromCart = async (targetProductId) => {
    try {
      const sessionData = JSON.parse(localStorage.getItem("session"));
      if (sessionData && sessionData.id) {
        const response = await axios.delete(
          "http://localhost:8080/api/cart_item/remove_item",
          { data: { sessionId: sessionData.id, productId: targetProductId } }
        );
        console.log("targetproductId: ", targetProductId);
        console.log(response);
      }

      const sessionResponse = await axios.post(
        "http://localhost:8080/api/session/total",
        {
          sessionId: sessionData.id,
        }
      );
      localStorage.setItem("session", JSON.stringify(sessionResponse.data));
      toast({
        title: "Item removed from cart!",
      });
    } catch (error) {
      console.error("Error fetching deleting cart item:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
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
              <>
                <div className="flex flex-row border-t justify-between">
                  <CartItem
                    key={index}
                    price={item.price}
                    imageLink={item.imageLink}
                    quantity={item.quantity}
                    name={item.name}
                  />
                  <div>
                    <button
                      className="p-2"
                      onClick={() => {
                        removeFromCart(item.productId);
                        getMyCartItems();
                      }}
                    >
                      <RxCross2 className="" size={24} color="gray" />
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </ScrollArea>
        <SheetFooter>
          <div className="flex flex-col w-full space-y-5">
            <div className="border-y py-2 flex flex-row justify-between">
              <h1 className="font-light">Total: </h1>
              <h1 className="font-semibold text-lg text-gray-700">{total}</h1>
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
