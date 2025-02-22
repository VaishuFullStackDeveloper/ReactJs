import React from "react";
import "./Amazon.css";
import Cart from "./Cart";

const Header = ({ cartCount }) => {
  return (
    <div className="cart-container">
      <h1>Amazon</h1>
      <div className="search-container">
        <input type="text" id="searchInput" placeholder="Search names.." />
      </div>
      <Cart cartCount={cartCount} />
    </div>
  );
};

export default Header;
