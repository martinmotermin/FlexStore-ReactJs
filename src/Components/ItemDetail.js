import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const { addToCart, cartList } = useContext(CartContext);

  const { sizes } = !!item && item;

  const [goCart, SetGoCart] = useState(false);

  const onAdd = (quantity) => {
    SetGoCart(true);
    addToCart({ ...item, quantity: quantity });
  };

  console.log(cartList);

  return (
    <React.Fragment>
      <div className="itemDetail" id={item.id}>
        <img className="itemDetail--img" src={item.src} alt={item.name} />
        <div className="itemDetail--details">
          <a className="details--brand" href="#">
            {item.brand}
          </a>
          <h2 className="details--name">{item.name}</h2>
          <a className="details--category" href="#">
            {item.category}
          </a>
          <hr />
          <p className="details--price">${item.price}</p>
          <div className="details--sizes">
            {sizes.map((size) => (
              <button key={size} className="btn btn-outline-secondary size">
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
      {!goCart ? (
        <ItemCount itemStock={item.stock} onAdd={onAdd} />
      ) : (
        <Link to="/cart">
          <button className="goCart btn btn-primary">Ir al carrito</button>
        </Link>
      )}
    </React.Fragment>
  );
};

export default ItemDetail;
