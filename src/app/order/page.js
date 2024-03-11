"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "../components/OrderCard";
import { useRouter } from "next/navigation";
import OrderTable from "../components/OrderTable";
const Order = () => {
  const router = useRouter();
  const [orderItem, setOrderItem] = useState({});
  const groupJsonByOrderId = (jsonArray) => {
    const groupedJson = {};
    jsonArray.forEach((obj) => {
      const orderId = obj.orderId;
      if (!groupedJson[orderId]) {
        groupedJson[orderId] = [];
      }
      groupedJson[orderId].push(obj);
    });

    const result = Object.values(groupedJson);
    result.sort((a, b) => b[0].orderId - a[0].orderId);

    return result;
  };
  const getOrder = async () => {
    const response = await axios.post(
      "http://localhost:8080/api/orderItem/getBySessionId",
      {
        sessionId: JSON.parse(localStorage.getItem("session")).id,
      }
    );
    setOrderItem(groupJsonByOrderId(response.data));
    console.log(groupJsonByOrderId(response.data));
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
            <OrderTable
              orderId={item[0].orderId}
              orderItem={item}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
