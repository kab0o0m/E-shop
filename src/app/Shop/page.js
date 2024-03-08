"use client";

import "./page.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Shop() {
  const [allProducts, setAllProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("default");
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

  const products = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/product");
      setAllProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const sortedProducts = (sort) => {
    if (sort === "a-z") {
      return allProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "z-a") {
      return allProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sort === "low-high") {
      return allProducts.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    } else if (sort === "high-low") {
      return allProducts.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    } else {
      return allProducts;
    }
  };

  useEffect(() => {
    products();
  }, []);

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  console.log(allProducts);

  return (
    <>
      {!isLoading && (
        <div className="shop">
          {/* Header */}
          <div className="shop-header">
            <a href="/">Home</a>
            <div>/</div>
            <div className="shop-header-page">
              <p>Shop</p>
            </div>
          </div>

          <div className="info-bar">
            <div className="displayed-number">
              Showing 1 - {allProducts.length} of {allProducts.length} result
            </div>
            <div className="sort">
              Sort By:
              <select value={sort} onChange={handleSortChange}>
                <option value="default">Default</option>
                <option value="a-z">Name (A-Z)</option>
                <option value="z-a">Name (Z-A)</option>
                <option value="low-high">Price (Low to High)</option>
                <option value="high-low">Price (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-wrap justify-center">
            {sortedProducts(sort).map((product, index) => (
              <div
                key={index}
                className="max-w-xs rounded overflow-hidden shadow-lg m-4"
              >
                <img
                  src={product.imageLink}
                  alt={product.name}
                  className="w-full"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{product.name}</div>
                  <p className="text-gray-700 text-base">
                    {product.description}
                  </p>
                  <p className="text-gray-700 text-base mt-2">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
                <div className="px-6 py-4 flex justify-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
