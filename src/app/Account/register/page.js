"use client";

import Navbar from "../../Navbar";
import "./page.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Register() {
  const router = useRouter();

  const initialFormData = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isCreate, setIsCreate] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the value for the corresponding input name
    }));
  };

  const isNumeric = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
  };

  const isEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phoneNumber.length === 8 && isNumeric(formData.phoneNumber)) {
      if (isEmail(formData.username)) {
        const text = `{
          "username": "${formData.username}",
          "password": "${formData.password}",
          "firstName": "${formData.firstName}",
          "lastName": "${formData.lastName}",
          "phoneNo": "${formData.phoneNumber}"
        }`;

        const jsonData = JSON.parse(text);
        console.log(jsonData);

        try {
          const register_url = "http://localhost:8080/api/auth/register";
          const response = await axios.post(register_url, jsonData);
          setIsCreate(true);
          console.log(response);
        } catch (error) {
          console.error("Registration failed");
        }
      } else {
        alert("Provide a valid email!");
      }
    } else {
      alert("Phone number must be 8 Digits!");
    }
  };

  return (
    <>
      <Navbar />
      {/* Header */}
      <div className="register">
        <div className="register-header">
          <a href="/">Home</a>
          <div>/</div>
          <div className="register-header-page">
            <p>Create Account</p>
          </div>
        </div>

        {!isCreate && (
          <div className="register-body">
            <div className="login">
              <h1>Create Account</h1>
              <p>Please register using account detail below.</p>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="username">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Email"
                  value={formData.username}
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
              <div className="first-name">
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="last-name">
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="phone">
                <input
                  type="text"
                  id="phone"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="enter">
                <button type="submit" className="register-button">
                  Create
                </button>
                <a href="/account">Login</a>
              </div>
            </form>
          </div>
        )}
        {isCreate && (
          <h1>
            Thank you for registering {formData.firstName} {formData.lastName}!
            Click <a href="/account">here</a> to login
          </h1>
        )}
      </div>
    </>
  );
}
