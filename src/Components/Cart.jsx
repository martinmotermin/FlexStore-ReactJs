import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import "./Cart.css";
import CheckoutForm from "./CheckoutForm";

export const Cart = () => {
  const { emptyCart, isEmpty, itemsQuant, totalPrice } =
    useContext(CartContext);
  const [dataForm, setDataForm] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState("");

  const cart = JSON.parse(localStorage.getItem("cart"));

  const handleFormChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const generateOrder = (e) => {
    e.preventDefault();

    let order = {};

    order.buyer = dataForm;
    order.value = totalPrice;

    order.items = cart.map((prod) => {
      const id = prod.id;
      const name = prod.name;
      const price = prod.price * prod.quantity;

      return { id, name, price };
    });

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then((resp) => setOrderId(resp.id))
      .catch((err) => console.error(err.message));

    emptyCart();
  };

  return (
    <div className="cartList">
      <div className="cartList__container">
        {!isEmpty ? (
          cart.map((prod) => (
            <CartItem
              key={prod.name}
              name={prod.name}
              id={prod.id}
              quant={prod.quantity}
              price={prod.price}
              src={prod.src}
            />
          ))
        ) : (
          <>
            {orderId.length > 0 && (
              <h2>
                Su orden ha sido generada, el codigo de seguimiento es:{" "}
                {orderId}
              </h2>
            )}
            <h1>No hay productos agregados!</h1>
            <hr />
            <Link to="/">
              <button>Volver al shop</button>
            </Link>
          </>
        )}
      </div>
      {!isEmpty && (
        <div>
          <div className="cart__resume">
            <h4>Total Productos: {itemsQuant}</h4>
            <hr />
            <h4>Total a Pagar: ${totalPrice}</h4>
            <hr />
          </div>
          <CheckoutForm
            generateOrder={generateOrder}
            handleFormChange={handleFormChange}
            emptyCart={emptyCart}
          />
        </div>
      )}
    </div>
  );
};
