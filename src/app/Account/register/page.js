"use client";

import Navbar from "../../Navbar";
import "./page.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Register() {
  const router = useRouter();

  const initialFormData = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  };
  const initialUser = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState(initialFormData);
  const [isCreate, setIsCreate] = useState(false);
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    if (isCreate) {
      setTimeout(() => router.push("/account"), 5000);
    }
  }, [isCreate]);

  useEffect(() => {
    setIsCreate(true);
    router.push("/account");
  }, [user]);
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
              <h1 className="text-3xl font-light">Create Account</h1>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="username">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="e.g. johndoe@mail.com"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-[30rem]"
                  required
                />
              </div>
              <div className="password">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-[30rem]"
                  required
                />
              </div>
              <div className="first-name">
                <Label htmlFor="first-name">First Name</Label>
                <Input
                  type="text"
                  id="first-name"
                  name="firstName"
                  placeholder="e.g. John"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-[30rem]"
                  required
                />
              </div>
              <div className="last-name">
                <Label htmlFor="last-name">Last Name</Label>
                <Input
                  type="text"
                  id="last-name"
                  name="lastName"
                  placeholder="e.g. Doe"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-[30rem]"
                  required
                />
              </div>

              <div className="phone">
                <Label htmlFor="email">Mobile Number</Label>
                <Input
                  type="text"
                  id="phone"
                  name="phoneNumber"
                  placeholder="e.g. 8888 8888"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-[30rem]"
                  required
                />
              </div>

              <div className="enter">
                <Button type="submit" className="register-button">
                  Create
                </Button>
                <a href="/account">Login</a>
              </div>
            </form>
          </div>
        )}
        {isCreate && (
          <div>
            <h1>
              Thank you for registering {formData.firstName} {formData.lastName}
              ! Click <a href="/account">here</a> to login
            </h1>
            <p>You will be redirected in 5s...</p>
          </div>
        )}
      </div>
    </>
  );
}
