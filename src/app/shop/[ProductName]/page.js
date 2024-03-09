"use client";

import axios from "axios";
import Link from "next/link";
import React from "react";
import ProductCarousel from "@/app/components/ProductCarousel";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

const Items = ({ params }) => {
  const { toast } = useToast();
  const [qty, setQty] = useState(0);
  const [item, setItem] = useState({});
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const initialUser =
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null;

  useEffect(() => {
    if (initialUser) {
      setUser(initialUser);
    }
  }, []);
  const addToCart = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/cart_item", {
        sessionId: JSON.parse(localStorage.getItem("session")).id,
        productId: item.id,
        quantity: qty,
      });
      console.log(response);
      const sessionResponse = await axios.post(
        "http://localhost:8080/api/session/total",
        {
          sessionId: JSON.parse(localStorage.getItem("session")).id,
        }
      );
      localStorage.setItem("session", JSON.stringify(sessionResponse.data));
      console.log(localStorage);
      toast({
        title: "Item added to cart!",
        description: "Go to your shopping cart to check out.",
      });
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };
  const products = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/product", {
        headers: {
          Authorization: localStorage.getItem("jwtToken"),
        },
      });
      setItem(
        response.data.filter(
          (item) => item.name === params.ProductName.replace(/%20/g, " ")
        )[0]
      );
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    products();
  });

  return (
    <>
      {!isLoading && (
        <>
          <div className="w-full h-20 bg-slate-100 px-64 flex flex-col pt-7">
            <div className="flex flex-row space-x-2 font-light items-center">
              <Link href="/shop" className="font-semibold">
                Shop{" "}
              </Link>
              <h1 className="font-semibold"> / </h1>
              <h1> {item.name}</h1>
            </div>
          </div>
          <div className="my-16" />
          <div className="flex flex-row px-64">
            <ProductCarousel sourceUrl={item.imageLink} />
            <div className="mx-8" />
            <div className="space-y-3">
              <h1 className="text-[45px] font-light">
                {params.ProductName.replace(/%20/g, " ")}
              </h1>
              <h1 className="text-[20px]">${item.price}</h1>
              <h1 className="text-[15px] max-w-[800px]">{item.description}</h1>
              <div className="flex flex-row items-center space-x-3">
                <h1 className="text-[16px]">Quantity: </h1>
                <div className="border rounded-md  flex flex-row justify-between items-center space-x-4">
                  <Button
                    className="bg-white text-gray-500 hover:bg-white hover:text-black"
                    onClick={() => {
                      setQty(Math.max(0, qty - 1));
                    }}
                  >
                    -
                  </Button>
                  <h1>{qty}</h1>
                  <Button
                    className="bg-white text-gray-500 hover:bg-white hover:text-black"
                    onClick={() => {
                      setQty(qty + 1);
                    }}
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className="my-16" />
              {qty > 0 ? (
                <Button className="px-16" onClick={addToCart}>
                  Add to Cart
                </Button>
              ) : (
                <Button className="px-16" disabled>
                  Add to Cart
                </Button>
              )}
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
};

export default Items;
