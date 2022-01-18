import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const { addToCart, cartList } = useContext(CartContext);
  const [goCart, SetGoCart] = useState(false);
  const { sizes } = !!item && item;
  const [sizeSelected, setSizeSelected] = useState(sizes[0]);

  const sizeHandler = (e) => {
    setSizeSelected(e.target.value);
  };

  const onAdd = (quantity) => {
    SetGoCart(true);
    addToCart({ ...item, quantity: quantity, size: sizeSelected });
  };

  return (
    <React.Fragment>
      <div className="itemDetail" id={item.id}>
        <img className="itemDetail--img" src={item.src} alt={item.name} />
        <div className="itemDetail--details">
          <h6 className="details--brand">{item.brand}</h6>
          <h2 className="details--name">{item.name}</h2>
          <h6 className="details--category">{item.category}</h6>
          <hr />
          <p className="details--price">${item.price}</p>
          <div className="details--sizes">
            <select onChange={sizeHandler}>
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
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
