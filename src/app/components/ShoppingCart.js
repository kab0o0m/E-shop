import React, { useEffect } from "react";

import axios from "axios";
import CartItem from "./CartItem";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const ShoppingCart = () => {
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
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };
  useEffect(() => {
    getMyCartItems();
  });
  return (
    <div>
      <ScrollArea className="h-[400px] w-full space-y-">
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
      <div className="border-y py-2 flex flex-row justify-between">
        <h1 className="font-light">Total: </h1>
        <h1 className="font-semibold text-lg text-gray-700">{total}</h1>
      </div>
    </div>
  );
};

export default ShoppingCart;
