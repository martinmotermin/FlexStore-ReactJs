import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Componentes y Estilos
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
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
          <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
