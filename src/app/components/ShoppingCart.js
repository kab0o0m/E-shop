import React, { useEffect } from "react";

import axios from "axios";
import CartItem from "./CartItem";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
const ShoppingCart = () => {
  const { toast } = useToast();
  const [myCartItems, setMyCartItems] = useState([]);
  const [total, setTotal] = useState(null);
  const getMyCartItems = async () => {
    try {
      const sessionData = JSON.parse(localStorage.getItem("session"));
      if (sessionData && sessionData.id) {
        const response = await axios.post(
          "http://localhost:8080/api/cart_item/my_cart",
          { sessionId: sessionData.id },
          {
            headers: {
              Authorization: JSON.parse(localStorage.getItem("jwtToken")),
            },
          }
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
          {
            headers: {
              Authorization: JSON.parse(localStorage.getItem("jwtToken")),
            },
            data: { sessionId: sessionData.id, productId: targetProductId },
          }
        );
        console.log("targetproductId: ", targetProductId);
        console.log(response);
      }

      const sessionResponse = await axios.post(
        "http://localhost:8080/api/session/total",
        {
          sessionId: sessionData.id,
        },
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("jwtToken")),
          },
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
    <div>
      <ScrollArea className="h-[400px] w-full space-y-">
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
      <div className="border-y py-2 flex flex-row justify-between">
        <h1 className="font-light">Total: </h1>
        <h1 className="font-semibold text-lg text-gray-700">
          ${total === null ? "0.0" : total}
        </h1>
      </div>
    </div>
  );
};

export default ShoppingCart;
