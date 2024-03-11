"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "../components/OrderCard";
const Order = () => {
  const [orderItem, setOrderItem] = useState({});
  const getOrder = async () => {
    const response = await axios.post(
      "http://localhost:8080/api/order/getBySessionId",
      {
        sessionId: JSON.parse(localStorage.getItem("session")).id,
      }
    );
    setOrderItem(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getOrder();
  }, []);
  return (
    <div>
      {orderItem.length <= 0 && (
        <div className="welcome text-center mt-8">
          <h1 className="text-xl font-bold mb-4 mt-10">
            Your orders are empty!
          </h1>
          <h1 className="text-xl mb-4">
            Click{" "}
            <a href="/shop" className="text-yellow-500 hover:underline ">
              here
            </a>{" "}
            to continue shopping
          </h1>
        </div>
      )}
      {orderItem.length > 0 && (
        <div className="mt-8">
          <div className="flex justify-center text-3xl">Your Orders</div>

          {orderItem.map((item, index) => (
            <OrderCard
              key={index}
              quantity={item.quantity}
              imgLink={item.imageLink}
              price={item.price}
              name={item.name}
              className="w-full"
            />
          ))}
          <div className="mt-8 flex justify-center">
            <div className="text-3xl font-semibold">Total: </div>
            <div className="text-3xl ml-2 text-orange-400">
              {" "}
              {/* Adjust the margin according to your preference */}$
              {orderItem
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
