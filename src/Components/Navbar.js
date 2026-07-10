import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  
  const nombreUsuario = localStorage.getItem("usuarioNombre");

  const handleCerrarSesion = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand ms-2" to="/">
          <img src="/IMG/LogoDonaton.png" alt="Donaton" width="120" />
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
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/donaciones">Donar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/transparencia">Transparencia</Link>
            </li>

            {nombreUsuario ? (
              <li className="nav-item d-flex align-items-center ms-lg-3 mt-2 mt-lg-0">
                <span className="nav-link text-white p-0 me-3">
                  Hola, {nombreUsuario}!
                </span>
                <button 
                  onClick={handleCerrarSesion} 
                  className="btn btn-outline-danger btn-sm"
                  style={{ borderRadius: "20px", fontSize: "0.8rem" }}
                >
                  Salir
                </button>
              </li>
            ) : (
              <li className="nav-item ms-lg-2">
                <Link className="nav-link" to="/login">
                  <img src="/IMG/cuentaDonaton.png" width="25" alt="Cuenta" />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
