"use client";

import React from "react";
import LayoutBar from "@/app/components/LayoutBar";
import { FilterBar } from "@/app/components/FilterBar";
import { ProductCard } from "@/app/components/ProductCard";
import { useState, useEffect } from "react";

const ProductTag = ({ params }) => {
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
    <div>
      <div>
        <div className="w-full h-48 bg-slate-100 px-64 py-10 flex flex-col">
          <h1 className="text-[48px] font-thin">{params.ProductTag}</h1>
          <div className="flex flex-row space-x-2 font-light">
            <h1 className="font-semibold">Shop </h1>
            <h1 className="font-semibold"> / </h1>
            <h1> {params.ProductTag}</h1>
          </div>
        </div>
        <LayoutBar />
      </div>
      <div className="flex flex-row px-64 justify-between">
        <FilterBar className="w-1/3" />
        <div className="grid gap-4 grid-cols-3 mt-3 w-2/3">
          <ProductCard
            title="watch"
            category="watch"
            price={1239}
            imgsrc="/img/applewatch-home.png"
          />
          <ProductCard
            title="watch"
            category="watch"
            price={1239}
            imgsrc="/img/applewatch-home.png"
          />
          {user.firstName}
        </div>
      </div>
    </div>
  );
};

export default ProductTag;
