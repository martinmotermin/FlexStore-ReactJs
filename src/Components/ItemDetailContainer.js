import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getProducts } from "../helpers/getProducts";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

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

  const { itemId } = useParams();

  useEffect(() => {
    getProducts
      .then((products) => setItem(products.find((prod) => prod.id == itemId)))
      .catch((err) => console.error(err.message))
      .finally(setLoading(false));
  }, [itemId]);

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
