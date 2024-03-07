"use client";

import Navbar from "../Navbar";
import "./page.css";
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
              <h1 className="text-3xl font-light">Login</h1>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="email">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="john.doe@mail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-[30rem]"
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
                  required
                  className="w-[30rem]"
                />
              </div>
              {isFailLogin && (
                <p className="text-red-400">Invalid username or password!</p>
              )}
              <div className="enter mt-5">
                <Button type="submit" className="rounded-full px-12 my-3">
                  Login
                </Button>
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
