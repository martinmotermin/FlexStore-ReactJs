import React, { useContext, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { useState } from "react/cjs/react.development";
import { CartContext } from "../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { itemsQuant, cartList } = useContext(CartContext);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (cartList.length == 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [cartList]);

  return (
    <IconContext.Provider value={{ color: "white" }}>
      <div className="cart__container">
        <a href="#">
          <FiShoppingCart />
        </a>

        {!isEmpty && <div className="cartWidget--count">{itemsQuant}</div>}
      </div>
    </IconContext.Provider>
  );
};

export default CartWidget;
