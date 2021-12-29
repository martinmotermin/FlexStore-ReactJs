import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

import "./Cart.css";

export const Cart = () => {
  const { cartList, emptyCart, isEmpty } = useContext(CartContext);

  console.log(cartList);
  return (
    <div className="cartList">
      <div className="cartList__container">
        {!isEmpty ? (
          cartList.map((prod) => (
            <CartItem
              key={prod.name}
              name={prod.name}
              id={prod.id}
              quant={prod.quantity}
              price={prod.price}
              src={prod.src}
            />
          ))
        ) : (
          <>
            <h1>No hay productos agregados!</h1>
            <hr />
            <Link to="/">
              <button>Volver al shop</button>
            </Link>
          </>
        )}
      </div>
      {!isEmpty && (
        <button onClick={emptyCart} className="btn btn-danger">
          Vaciar Carrito
        </button>
      )}
    </div>
  );
};
