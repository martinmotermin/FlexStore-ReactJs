import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

import "./CartItem.css";

const CartItem = ({ id, name, price, quant, src }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="cartItem card mb-3" id={id}>
      <img src={src} className="img-fluid rounded-start" alt="..." />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h4 className="card-price">${price}</h4>
        <h6>Cantidad: {quant}</h6>
        <h5>SubTotal: ${price * quant}</h5>
      </div>

      <button
        onClick={() => {
          removeItem(id);
        }}
        className="btn btn-danger removeItem--btn"
      >
        X
      </button>
    </div>
  );
};

export default CartItem;
