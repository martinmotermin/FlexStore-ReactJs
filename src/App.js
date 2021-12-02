import React from "react";
import "./App.css";

//Componentes y Estilos
import ItemListContainer from "./Components/ItemListContainer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <ItemListContainer greeting={"Aqui va la lista de productos"} />
    </React.Fragment>
  );
}

export default App;
