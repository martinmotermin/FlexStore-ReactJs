import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { getFirebaseApp } from "./config/getFirestoreApp";

getFirebaseApp();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
