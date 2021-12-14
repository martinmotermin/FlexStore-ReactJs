import React from "react";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";

//Componentes y Estilos
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <ItemDetailContainer />
      <ItemListContainer />
    </React.Fragment>
  );
}

export default App;
