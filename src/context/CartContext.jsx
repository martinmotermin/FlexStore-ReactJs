import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const [itemsQuant, setItemsQuant] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);

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

  const reducer = (totalItems, currentItem) => {
    return totalItems + currentItem.quantity;
  };

  useEffect(() => {
    setItemsQuant(cartList.reduce(reducer, 0));
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
