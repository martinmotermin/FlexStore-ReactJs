import React from "react";

import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const { sizes } = !!item && item;

  return (
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
  );
};

export default ItemDetail;
