import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext";

//Componentes y Estilos
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar";
import "./App.css";
import { Cart } from "./components/Cart";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route
              exact
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              exact
              path="/item/:itemId"
              element={<ItemDetailContainer />}
            />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
