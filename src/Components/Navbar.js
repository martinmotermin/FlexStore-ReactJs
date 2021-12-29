import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="primary__container container-fluid d-flex">
      <nav className="navbar__container navbar navbar-expand-lg align-self-start">
        <Link to="/" className="navbar-brand">
          <p>FlexStore.</p>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/category/hombre" className="nav-link">
                Hombre
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/mujer" className="nav-link">
                Mujer
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/kids" className="nav-link">
                Kids
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/brand"
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Marcas
              </Link>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Nike
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Adidas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Vans
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </nav>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default Navbar;
