import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
// import { getProducts } from "../helpers/getProducts";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";

import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId, brandId } = useParams();

  useEffect(() => {
    if (categoryId) {
      const db = getFirestore();
      const queryCollection = collection(db, "items");
      getDocs(queryCollection).then((resp) => {
        const items = resp.docs.map((prod) => ({
          id: prod.id,
          ...prod.data(),
        }));
        setProducts(items.filter((prod) => prod.category === categoryId));
      });
      setLoading(false);
    } else {
      const db = getFirestore();
      const queryCollection = collection(db, "items");
      getDocs(queryCollection).then((resp) =>
        setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      );
      setLoading(false);
    }
    if (brandId) {
      const db = getFirestore();
      const queryCollection = collection(db, "items");
      getDocs(queryCollection).then((resp) => {
        const items = resp.docs.map((prod) => ({
          id: prod.id,
          ...prod.data(),
        }));
        setProducts(items.filter((prod) => prod.brand === brandId));
      });
      setLoading(false);
    } else {
      const db = getFirestore();
      const queryCollection = collection(db, "items");
      getDocs(queryCollection).then((resp) =>
        setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      );
      setLoading(false);
    }
  }, [categoryId, brandId]);
  return (
    <div className="itemList__container">
      {loading ? <h1>Cargando Productos</h1> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
