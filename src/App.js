import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartClicked, setIsCartClicked] = useState(false);
  function cartClickHandler() {
    setIsCartClicked(!isCartClicked);
  }

  return (
    <CartProvider>
      {isCartClicked && <Cart onClose={cartClickHandler} />}
      <Header cartClickHandler={cartClickHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
