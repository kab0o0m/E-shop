import React from "react";
import Image from "next/image";
const OrderCard = ({ quantity, imgLink, name, price }) => {
  console.log(imgLink);
  return (
    <div>
      <div className="border rounded-md w-1/2 mx-auto flex flex-row my-2 p-2">
        <Image
          src={imgLink}
          alt={imgLink}
          width={100}
          height={100}
          className="rounded-md"
        />
        <div>
          <div className="flex flex-row justify-between items-center w-full">
            <div className="font-semibold text-lg">{name}</div>
            <div className="text-orange-400">${price}</div>
          </div>

          <div>x{quantity}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
