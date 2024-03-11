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
      },
      {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("jwtToken")),
        },
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
      {orderItem.length &&
        orderItem.map((item, index) => (
          <OrderCard
            key={index}
            quantity={item.quantity}
            imgLink={item.imageLink}
            price={item.price}
            name={item.name}
          />
        ))}
    </div>
  );
};

export default Order;
