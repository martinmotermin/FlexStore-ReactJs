import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../helpers/getProducts";
import { useParams } from "react-router-dom";

import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getProducts
        .then((products) =>
          setProducts(products.filter((prod) => prod.category === categoryId))
        )
        .catch((err) => console.error(err))
        .finally(setLoading(false));
    } else {
      getProducts
        .then((products) => setProducts(products))
        .catch((err) => {
          console.error(err.message);
        })
        .finally(setLoading(false));
    }
  }, [categoryId]);

  return (
    <div className="itemList__container">
      {loading ? <h1>Cargando Productos</h1> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
