import React from "react";
import CartWidget from "./CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="primary__container container-fluid">
      <nav className="navbar__container navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          <p>FlexStore.</p>
        </a>
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
              <a className="nav-link" href="#">
                Hombre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mujer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Niños
              </a>
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
      <CartWidget />
    </div>
  );
};

export default Navbar;
