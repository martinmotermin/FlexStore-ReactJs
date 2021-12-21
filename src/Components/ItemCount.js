import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ itemStock, onAdd }) => {
  const [counter, setCounter] = useState(1);

  const addProductHandler = () => {
    counter < itemStock && setCounter(counter + 1);
  };

  const sustractProductHandler = () => {
    counter > 1 && setCounter(counter - 1);
  };

  return (
    <div className="item__count--card">
      <div className="item__counter">
        <button className="btn btn-primary" onClick={sustractProductHandler}>
          -
        </button>
        <p>{counter}</p>
        <button className="btn btn-primary" onClick={addProductHandler}>
          +
        </button>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          onAdd(counter);
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
