import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = () => {
  const [counter, setCounter] = useState(1);

  const addProductHandler = () => {
    setCounter(counter + 1);
  };

  const sustractProductHandler = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="item__count--card">
      <h3 className="item__title">Nombre del producto</h3>
      <div className="item__counter">
        <button onClick={sustractProductHandler}>-</button>
        <p>{counter}</p>
        <button onClick={addProductHandler}>+</button>
      </div>
    </div>
  );
};

export default ItemCount;
