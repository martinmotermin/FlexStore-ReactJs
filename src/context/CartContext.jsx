import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

function CartContextProvider({ children }) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartList, setCartList] = useState(cart);
  const [itemsQuant, setItemsQuant] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const isInCard = cartList.some((item) => item.id === product.id);
    if (!isInCard) {
      setCartList([...cartList, product]);
    } else {
      const tempCart = cartList.map((item) => {
        if (item.id === product.id) {
          item.quantity = item.quantity + product.quantity;
          return item;
        }
      });
      setCartList(tempCart);
    }
  };

  useEffect(() => {
    setItemsQuant(cartList.reduce((acum, prod) => acum + prod.quantity, 0));
    setTotalPrice(
      Number(
        cartList
          .reduce((acum, prod) => acum + prod.quantity * prod.price, 0)
          .toFixed(2)
      )
    );
    localStorage.setItem("cart", JSON.stringify(cartList));
    if (cartList.length > 0) {
      setIsEmpty(false);
    }
  }, [cartList]);

  const emptyCart = () => {
    setCartList([]);
    setItemsQuant(0);
    setIsEmpty(true);
  };

  const removeItem = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        emptyCart,
        removeItem,
        cartList,
        itemsQuant,
        isEmpty,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
