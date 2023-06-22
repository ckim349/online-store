import React, { useState, useContext } from "react";
import CartModal from "./CartModal";
import { CartContext } from "../../../App";
import image from "../../../../public/images/shopping-cart.png"

const Cart = () => {
  const [showCart, setShowCart] = useState(false);

  const { cart, setCart } = useContext(CartContext);

  const closeCart = () => {
    setShowCart(false);
  };

  const total = cart.reduce((total, item) => {
    return total + item.amount * item.price;
  }, 0);

  return (
    <div className="flex justify-center items-center mb-2">
      <button className="flex items-center font-bold text-lg" onClick={() => setShowCart(true)}>
        <img src={image} className="w-10 mr-3" />
        ${total}
      </button>
      <CartModal open={showCart} close={closeCart} total={total} />
    </div>
  );
};

export default Cart;
