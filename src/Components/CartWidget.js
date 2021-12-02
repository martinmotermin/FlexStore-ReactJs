import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <IconContext.Provider value={{ color: "white" }}>
      <div className="cart__container">
        <FiShoppingCart />
      </div>
    </IconContext.Provider>
  );
};

export default CartWidget;
