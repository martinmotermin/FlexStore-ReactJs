import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

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

  const emptyCart = () => {
    setCartList([]);
  };

  const removeItem = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ addToCart, emptyCart, removeItem, cartList }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
