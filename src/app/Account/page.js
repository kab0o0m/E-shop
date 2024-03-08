"use client";

import Navbar from "../Navbar";
import "./page.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function Account() {
  const initialFormData = {
    email: "",
    password: "",
  };

  const initialUser =
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null;
  const [formData, setFormData] = useState(initialFormData);
  const [isLogin, setIsLogin] = useState(false);
  const [isFailLogin, setIsFailLogin] = useState(false);
  const [user, setUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in
    if (initialUser) {
      setIsLogin(true); // Set isLogin to true
      setUser(initialUser); // Set the user state
    }
  }, []);

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
      localStorage.setItem(
        "jwtToken",
        JSON.stringify(response.data.tokenType + response.data.accessToken)
      );
      localStorage.setItem("session", JSON.stringify(response.data.session));
      localStorage.setItem("user", JSON.stringify(response.data.user));
    } catch (error) {
      setIsFailLogin(true);
    }
  };

  const logOut = () => {
    localStorage.clear();
    setIsLogin(false);

    router.push("/account");
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
          <div className="welcome">
            <h1>Welcome {user.firstName}!</h1>
            <h1>
              Click <a href="/shop">here</a> to start shopping
            </h1>
            <div className="account-details">
              <h1>Account details</h1>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>First Name:</strong>
                    </td>
                    <td>{user.firstName}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Last Name:</strong>
                    </td>
                    <td>{user.lastName}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Email:</strong>
                    </td>
                    <td>{user.username}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Phone:</strong>
                    </td>
                    <td>{user.phoneNo}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button onClick={logOut}>Log out</button>
          </div>
        )}
      </div>
    </>
  );
}
