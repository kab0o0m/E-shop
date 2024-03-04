import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <a href="/">
            V<s>O</s>LT
          </a>
        </div>
        <div className="link">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/account">Account</a>
        </div>
        <div className="icons">
          <a href="/checkout">
            <FontAwesomeIcon icon={faCartShopping} className="shopping-cart" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
