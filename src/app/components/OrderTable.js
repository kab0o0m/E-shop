import React from "react";
import OrderCard from "./OrderCard";
const OrderTable = ({ orderId, orderItem }) => {
  return (
    <div className="shadow mx-auto w-fit">
      <div className="mt-8 border min-w-[800px]">
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
        <div className="px-4 flex flex-row justify-between items-center pb-2">
          <div className="flex flex-row space-x-1">
            <h1>Order ID: </h1>
            <div className="font-semibold text-gray-700">{orderId}</div>
          </div>
          <div className="flex">
            <div className="text-xl font-semibold">Order Total: </div>
            <div className="text-xl ml-2 text-orange-400">
              $
              {orderItem
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
