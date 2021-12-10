import React from "react";

const Item = ({ id, src, name, price }) => {
  return (
    <div id={id}>
      <img src={src} alt="produc-img" />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default Item;
