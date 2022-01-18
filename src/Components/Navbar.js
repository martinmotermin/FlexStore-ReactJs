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
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Marcas
              </a>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/brand/nike" className="dropdown-item">
                    Nike
                  </Link>
                </li>
                <li>
                  <Link to="/brand/adidas" className="dropdown-item">
                    Adidas
                  </Link>
                </li>
                <li>
                  <Link to="/brand/reebok" className="dropdown-item">
                    Reebok
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default Navbar;
