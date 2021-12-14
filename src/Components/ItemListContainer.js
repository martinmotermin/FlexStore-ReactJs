import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../helpers/getProducts";

import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts
      .then((products) => setProducts(products))
      .catch((err) => {
        console.error(err.message);
      })
      .finally(setLoading(false));
  }, []);
  return (
    <div className="itemList__container">
      {loading ? <h1>Cargando Productos</h1> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
