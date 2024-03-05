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
  const [isLogin, setIsLogin] = useState(false);
  const [isFailLogin, setIsFailLogin] = useState(false);
  const [user, setUser] = useState({});

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
      const response = await axios.post(login_url, jsonData);
      setIsLogin(true);
      console.log(response);
      setUser(response.data.user);
    } catch (error) {
      setIsFailLogin(true);
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
        {!isLogin && (
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
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {isFailLogin && <p>Wrong username or password*</p>}
              <div className="enter">
                <button type="submit" className="account-button">
                  Login
                </button>
                <a href="account/register">Create Account</a>
              </div>
            </form>
          </div>
        )}
        {isLogin && (
          <h1>
            Welcome {user.firstName}! Click <a href="/shop">here</a> to start
            shopping
          </h1>
        )}
      </div>
    </>
  );
}
