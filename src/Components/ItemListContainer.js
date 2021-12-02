import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="itemList__container">
      <h1 className="greeting">{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
