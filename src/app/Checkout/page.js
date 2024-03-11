"use client";

import { useState, useEffect } from "react";
import CheckoutForm from "../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ShoppingCart from "../components/ShoppingCart";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51Os5EMP9xUJVEDnu2yjZFNI1c7PqxT9VgUaMDl2aTVe0M4FzJYbHbPuLPuOfL1zkn0NANXSactWRN8BJFneYxb0E00wuTe5QTd"
);

const CheckoutPage = () => {
  const [countries, setCountries] = useState([]);
  const [isPaid, setIsPaid] = useState(false);

  const deleteCart = async () => {
    try {
      const sessionData = JSON.parse(localStorage.getItem("session"));
      console.log("sessionData: ", sessionData);
      const postOrderItemResponse = await axios.post(
        "http://localhost:8080/api/order/save",
        {
          sessionId: `${sessionData.id}`,
        },
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("jwtToken")),
          },
        }
      );
      console.log(postOrderItemResponse);

      const deleteResponse = await axios.delete(
        "http://localhost:8080/api/cart_item/all",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: JSON.parse(localStorage.getItem("jwtToken")),
          },
          data: {
            sessionId: `${sessionData.userId}`,
          },
        }
      );
      if (sessionData && sessionData.hasOwnProperty("total")) {
        // Set total to 0
        sessionData.total = 0;

        // Set the updated session data back to localStorage
        localStorage.setItem("session", JSON.stringify(sessionData));
      }
      console.log(deleteResponse.data); // Log the response data
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const updateAvailability = async () => {
    try {
      const sessionData = JSON.parse(localStorage.getItem("session"));
      if (sessionData && sessionData.id) {
        const payload = {
          sessionId: "1",
        };

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        axios
          .post(
            "http://localhost:8080/api/cart_item/updateAvailability",
            payload,
            config
          )
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryOptions = data.map((country) => ({
          code: country.cca2,
          name: country.name.common,
        }));
        setCountries(countryOptions);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleSubmit = (paymentMethod) => {
    // Handle successful payment here
    console.log("Payment successful");
    console.log(paymentMethod);
    updateAvailability();
    deleteCart();
    setIsPaid(true);
  };

  return (
    <div className="flex justify-evenly mt-8 w-full">
      {!isPaid && (
        <div className="w-full max-w-4xl flex justify-between shadow-md rounded-lg">
          {/* Payment Details Section */}
          <div className="w-1/2 bg-gray-100 p-8 rounded-l-lg">
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Email or phone number"
                required
              />
            </div>
            <h2 className="text-xl font-bold mb-4">Delivery</h2>
            {countries.length > 0 && (
              <select
                id="country"
                name="country"
                className="mb-1 p-2 w-full border rounded-md"
                defaultValue=""
                required
              >
                <option value="" disabled hidden>
                  Country/Region
                </option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            )}

            <div className="mt-2 mb-4 flex">
              <div className="w-1/2 mr-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
            </div>
            <div className="mb-4 flex">
              <div className="w-1/3 mr-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="w-1/3 mr-2">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="w-1/3">
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium text-gray-700"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
            </div>
            {/* Shopping cart items and summary goes here */}
            <Elements stripe={stripePromise}>
              <CheckoutForm handleSubmit={handleSubmit} />
            </Elements>
          </div>
          {/* Shopping Cart Section */}
          <div className="w-1/2 bg-white p-8 rounded-r-lg">
            <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
            {/* Shopping cart items and summary goes here */}
            <ShoppingCart />
          </div>
        </div>
      )}
      {isPaid && (
        <div className="welcome text-center mt-8">
          <h1 className="text-3xl font-bold mb-4">Payment successful!</h1>
          <h1 className="text-xl mb-4">
            Click{" "}
            <a href="/shop" className="text-yellow-500 hover:underline ">
              here
            </a>{" "}
            to continue shopping
          </h1>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
