import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";

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
    const db = getFirestore();
    const queryDb = doc(db, "items", itemId);
    getDoc(queryDb).then((resp) => setItem({ id: resp.id, ...resp.data() }));
    setLoading(false);
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
