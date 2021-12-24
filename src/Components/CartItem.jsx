import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ id, name, price, quant, src }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="card mb-3" id={id}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={src} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h4 className="card-price">${price}</h4>
            <h6>Cantidad: {quant}</h6>
            <h5>Total: ${price * quant}</h5>
          </div>
        </div>
      </div>
      <div className="row">
        <button
          onClick={() => {
            removeItem(id);
          }}
          className="btn btn-danger"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CartItem;
