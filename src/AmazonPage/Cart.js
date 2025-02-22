import React from "react";
import logo from "../AmazonPage/card.png";
import "./Amazon.css";

const Cart = ({ cartCount }) => {
  return (
    <div className="cart-container">
      <img src={logo} alt="Cart Logo" className="cart-logo" />
      <span style={{ color:"white",marginBottom:"45px",fontSize:"20px"}} className="cart-count">{cartCount}</span> 
    </div>
  );
};

export default Cart;
