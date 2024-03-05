"use client";

import Navbar from "../Navbar";
import "./page.css";
import { useState } from "react";
import axios from "axios";

export default function Account() {
  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the value for the corresponding input name
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = `{
      "username": "${formData.email}",
      "password": "${formData.password}"
    }`;
    const jsonData = JSON.parse(text);
    console.log(jsonData);

    try {
      const login_url = "http://localhost:8080/api/auth/login";
      await axios.post(login_url, jsonData);
      console.log("Login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="account">
        {/* Header */}
        <div className="account-header">
          <a href="/">Home</a>
          <div>/</div>
          <div className="account-header-page">
            <p>Account</p>
          </div>
        </div>

        {/* Body */}
        <div className="account-body">
          <div className="login">
            <h1>Login</h1>
            <p>Please login using account detail below.</p>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="email">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="password">
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="enter">
              <button type="submit" className="account-button">
                Login
              </button>
              <a href="account/register">Create Account</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
