import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../helpers/getProducts";

const ItemListContainer = ({ greeting }) => {
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
  console.log(products);
  return (
    <div className="itemList__container">
      <h1 className="greeting">{greeting}</h1>
      {loading ? <h1>Cargando Productos</h1> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
