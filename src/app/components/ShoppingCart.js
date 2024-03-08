import React from "react";

import axios from "axios";
import { MdShoppingCart } from "react-icons/md";
import { useEffect } from "react";
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

const ShoppingCart = () => {
  //   const getMyCartItems = async () => {
  //     const myCartItems = await axios.post(
  //       "http://localhost:8080/api/cart_item/my_cart",
  //       {
  //         sessionId: JSON.parse(localStorage.getItem("session")).id,
  //       }
  //     );
  //     console.log(myCartItems);
  //   };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* <button onClick={getMyCartItems()}> */}
        <MdShoppingCart size={25} />
        {/* </button> */}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <ScrollArea></ScrollArea>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
