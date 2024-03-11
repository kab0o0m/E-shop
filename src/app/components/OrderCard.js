import React from "react";
import Image from "next/image";
const OrderCard = ({ quantity, imgLink, name, price }) => {
  console.log(imgLink);
  return (
    <div>
      <div className="border-b mx-auto flex flex-row my-2 p-2 px-4">
        <Image
          src={imgLink}
          alt={imgLink}
          width={100}
          height={100}
          className="rounded-md"
        />
        <div className="flex items-center justify-between w-full ">
          <div className="flex flex-col items-start w-full">
            <div className="font-semibold text-xl ">{name}</div>
            <div>x{quantity}</div>
          </div>

          <div className="text-orange-400 text-xl">${price}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
