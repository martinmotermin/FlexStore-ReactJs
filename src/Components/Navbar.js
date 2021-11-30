import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="primary__container container-fluid">
      <nav className="navbar__container navbar navbar-expand-lg">
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
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Marcas
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Nike
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Adidas
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Vans
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <a className="navbar-brand" href="#">
          <p>FLEX STORE.</p>
        </a>
        <div>
          <p>Cart Logo</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
