"use client";

import React from "react";
import "./Navbar.css";
import Navigation from "./components/Navigation";
import { CiHeart } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const pfDisplay = Playfair_Display({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div>
      <div className="w-full h-8 bg-orange-400 flex flex-row p-1.5">
        <p className="text-white font-normal text-sm mx-32">
          Need help? Call Us (+1234) 1235 432
        </p>
      </div>
      <nav>
        <div className="logo">
          <Link href="/">
            <h1 className={`${pfDisplay.className} font-semibold`}>Vølt</h1>
          </Link>
        </div>
        <Navigation />
        <div className="icons">
          <div className="flex flex-row space-x-7">
            <Link href="/account ">
              <FaUser size={18} className="mt-1 " />
            </Link>
            <Link href="/checkout">
              <CiHeart size={24} />
            </Link>
            <Link href="/checkout">
              <MdShoppingCart size={25} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
