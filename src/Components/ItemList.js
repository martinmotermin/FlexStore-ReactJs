import React from "react";
import Item from "./Item";

import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="item__list container">
      {products.map((prod) => (
        <Item
          key={prod.id}
          id={prod.id}
          src={prod.src}
          name={prod.name}
          price={prod.price}
        />
      ))}
    </div>
  );
};

export default ItemList;
