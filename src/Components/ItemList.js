import React from "react";

import Item from "./Item";

const ItemList = ({ products }) => {
  console.log(products);
  return (
    <div>
      {products.map((prod) => {
        <Item
          key={prod.id}
          id={prod.id}
          src={prod.src}
          name={prod.name}
          price={prod.price}
        />;
      })}
    </div>
  );
};

export default ItemList;
