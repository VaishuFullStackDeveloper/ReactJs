import React from "react";
import logo from "../AmazonPage/card.png";
import "./Amazon.css";
export default class Amazon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
    };
  }
  addToCart = () => {
    this.setState({ cartCount: this.state.cartCount + 1 });
  };                                                                                                                                    
  render() {

    // Array of products with name, price, and image
    const products = [
      { name: "CPU Cooling fan", price: "₹500", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjFzHSV_UlXnc0gt6Wn9atzgjeFI2xv7o9siJChytXpX_D_Q3sUaZWONoe1E4a3OtHN27CQGK225U3oTxecs6-TRy7Il0gOIx33exuths0-zLCrNOmBV4I&usqp=CAE" },
      { name: "Processor", price: "₹1000", image: "https://5.imimg.com/data5/RN/JR/SE/SELLER-100976058/computer-processor-500x500.jpg" },
      { name: "Power Cable", price: "₹1000", image: "" },
      { name: "Hard disk drive", price: "₹1000", image: "" },
      { name: "Motherboard", price: "₹1000", image: "" },
      { name: "Floppy disk", price: "₹1000", image: "" },
      { name: "Battary", price: "₹1000", image: "" },
      { name: " Daughter Board", price: "₹1000", image: "" },
      { name: "CD-ROM", price: "₹1000", image: "" },
      { name: "Data Cables", price: "₹1000", image: "" },

    ];
    return (
      <div className="cart-main-container">
        {/* Header  */}
        <div className="cart-container">

          <h1>Amazon</h1>
          <div className="search-container">
            <input type="text" id="searchInput" placeholder="Search names.."></input>
          </div>
          <img src={logo} alt="Cart Logo" className="cart-logo" />
          <h1 style={{color:"white"}}>{this.state.cartCount}</h1>
        </div>

        {/* Product Section  */}
        <h1 className="heading">CPU Parts</h1>
        <div className="product-container">
          {products.map((product) => (
            <div className="product-box">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button onClick={()=>this.addToCart()}>add to cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

