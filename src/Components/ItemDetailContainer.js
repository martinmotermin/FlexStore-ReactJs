import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getProducts } from "../helpers/getProducts";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({
    id: null,
    name: null,
    price: null,
    stock: null,
    brand: null,
    category: null,
    sizes: [],
    src: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts
      .then((products) => setItem(products[0]))
      .catch((err) => console.error(err.message))
      .finally(setLoading(false));
  }, []);

  console.log(item);

  return (
    <div className="itemDetail__container container">
      {loading ? (
        <h1>Cargando Producto</h1>
      ) : (
        <ItemDetail item={item} key={item.id} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
