import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import ProductCarousel from "@/app/components/ProductCarousel";
import { Button } from "@/components/ui/button";

const page = ({ params }) => {
  const initialUser =
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null;

  const [user, setUser] = useState({});
  useEffect(() => {
    // Check if the user is logged in
    if (initialUser) {
      setUser(initialUser); // Set the user state
    }
  }, []);

  return (
    <>
      <div className="w-full h-20 bg-slate-100 px-64 flex flex-col pt-7">
        <div className="flex flex-row space-x-2 font-light items-center">
          <h1 className="font-semibold">Shop </h1>
          <h1 className="font-semibold"> / </h1>
          <h1 className="font-semibold"> {params.ProductTag}</h1>
          <h1 className="font-semibold"> / </h1>
          <h1> {params.ProductName}</h1>
        </div>
      </div>
      <div className="my-16" />
      <div className="flex flex-row px-64">
        <ProductCarousel />
        <div className="mx-8" />
        <div className="space-y-3">
          <h1 className="text-[45px] font-light">{params.ProductName}</h1>
          <div className="flex flex-row space-x-1 items-baseline">
            <h1 className="text-[16px] font-light">Availability: </h1>
            <h1 className="text-[16px]  text-orange-400">11 left</h1>
          </div>
          <h1 className="text-[20px]">$200</h1>
          <h1 className="text-[15px] max-w-[800px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;,s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </h1>
          <div className="my-16" />
          <Button>Add to Cart</Button>
        </div>
      </div>
    </>
  );
};

export default page;
