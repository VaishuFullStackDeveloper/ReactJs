import React, { useState } from "react";
import "./App.css";
import Imdb from "./Add-movies/Imdb";
import Dashboard from "./CoinCount/Dashboard";
// import Form from "./IMDb-Dashboard/Form";


function App() {
  // const [cartCount, setCartCount] = useState(0);

  // const addToCart = () => {
  //   setCartCount(cartCount + 1); 
  // };

  return (
    <div className="App"> 
<Dashboard/>
{/* <Imdb/> */}
{/* <Form/> */}

      {/* <Header cartCount={cartCount} />
      <Panal addToCart={addToCart} /> */}
    </div>
  );
}

export default App;
