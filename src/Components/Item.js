import React from "react";
import { Link } from "react-router-dom";

import "./Item.css";

const Item = ({ id, src, name, price }) => {
  return (
    <Link to={`/item/${id}`}>
      <div id={id} className="card">
        <img src={src} alt="produc-img" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-price">${price}</p>
        </div>
        <button className="btn btn-outline-secondary">Comprar</button>
      </div>
    </Link>
  );
};

export default Item;
