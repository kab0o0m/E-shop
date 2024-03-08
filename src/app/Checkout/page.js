"use client";
import { useState, useEffect } from "react";
import { Elements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import dynamic from "next/dynamic";

const DynamicCheckoutForm = dynamic(
  () => import("../components/CheckOutForm"),
  {
    ssr: false, // Ensure that CheckoutForm is not rendered on the server-side
  }
);

const stripePromise = loadStripe(
  "pk_test_51Os5EMP9xUJVEDnu2yjZFNI1c7PqxT9VgUaMDl2aTVe0M4FzJYbHbPuLPuOfL1zkn0NANXSactWRN8BJFneYxb0E00wuTe5QTd"
);

export default function Checkout() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-evenly mt-8 w-full">
      <div className="w-full max-w-4xl flex justify-between">
        {/* Payment Details Section */}
        <div className="w-1/2 bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Email or phone number"
              />
            </div>
            <h2 className="text-xl font-bold mb-4">Delivery</h2>
            {countries.length > 0 && (
              <select
                id="country"
                name="country"
                className="mb-1 p-2 w-full border rounded-md"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
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
                />
              </div>
            </div>
            {/* Shopping cart items and summary goes here */}
            <Elements stripe={stripePromise}>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#333",
                      "::placeholder": {
                        color: "#999",
                      },
                    },
                    invalid: {
                      color: "#e53e3e",
                    },
                  },
                }}
                className="border rounded-md p-2 w-full"
              />
            </Elements>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
            >
              Pay Now
            </button>
          </form>
        </div>
        {/* Shopping Cart Section */}
        <div className="w-1/2 bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
          {/* Shopping cart items and summary goes here */}
        </div>
      </div>
    </div>
  );
}
