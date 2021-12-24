import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

export const Cart = () => {
  const { cartList, emptyCart } = useContext(CartContext);

  console.log(cartList);
  return (
    <div>
      <div className="cartList__container">
        {cartList.map((prod) => (
          <CartItem
            key={prod.name}
            name={prod.name}
            id={prod.id}
            quant={prod.quantity}
            price={prod.price}
            src={prod.src}
          />
        ))}
      </div>
      <button onClick={emptyCart} className="btn btn-danger">
        Vaciar Carrito
      </button>
    </div>
  );
};
