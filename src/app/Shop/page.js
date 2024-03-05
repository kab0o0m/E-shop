"use client";

import Navbar from "../Navbar";
import "./page.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Shop() {
  const [allProducts, setAllProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const products = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/product");
      setAllProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    products();
  }, []);

  console.log(allProducts);

  return (
    <>
      <Navbar />

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
          {/* Body */}
          <div className="shop-body">
            {allProducts.length !== 0 &&
              Object.values(allProducts).map((product, index) => (
                <div key={index} className="product">
                  <p>{product.name}</p>
                  <p>{product.description}</p>
                  <p>{product.price}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
