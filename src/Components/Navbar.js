import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand ms-2" to="/">
          <img src="img/LogoDonaton.png" alt="Donaton" width="120" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/donaciones">Donar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/transparencia">Transparencia</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <img src="img/cuentaDonaton.png" width="25" alt="Cuenta" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
