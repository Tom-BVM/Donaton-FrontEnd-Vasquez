import React from "react";
import  { listarDonaciones, listarNecesidades } from "../Services/Api";

function Transparencia() {
  return (
    <div className="container my-5">
      {/* Título principal */}
      <h1 className="text-primary fw-bold text-center mb-4">Transparencia</h1>

      {/* Sección introductoria */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <p className="lead">
            En coherencia con nuestro compromiso, somos auditados a través de un
            riguroso proceso externo realizado por Auditores JL . También trabajamos
            junto a Chile Transparente en la implementación de 24 estándares de
            acceso a la información y rendición de cuentas, lo que nos permitió
            obtener el Sello de Transparencia.
          </p>
          <p>
            Asimismo, capacitamos a todo nuestro equipo en la Ley Karin y el
            modelo de prevención de delitos, fortaleciendo nuestra cultura
            interna y previniendo cualquier tipo de irregularidad.
          </p>
        </div>
        <div className="col-md-6 text-center">
          {/* Corregido a: /IMG/transparencia.png */}
          <img
            src="/IMG/transparencia.png"
            alt="Compromiso de Transparencia"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Sección de cuentas públicas */}
      <div className="mb-5">
        <h2 className="text-secondary fw-bold mb-3">Cuentas Públicas</h2>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Cuenta Pública #1 – Enero 2026
            <div>
              <a href="#" className="btn btn-sm btn-outline-primary me-2">Ver</a>
              <a href="#" className="btn btn-sm btn-primary">Descargar</a>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Cuenta Pública #2 – Febrero 2026
            <div>
              <a href="#" className="btn btn-sm btn-outline-primary me-2">Ver</a>
              <a href="#" className="btn btn-sm btn-primary">Descargar</a>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Cuenta Pública #3 – Marzo 2026
            <div>
              <a href="#" className="btn btn-sm btn-outline-primary me-2">Ver</a>
              <a href="#" className="btn btn-sm btn-primary">Descargar</a>
            </div>
          </li>
        </ul>
      </div>

      {/* Sección de destino de donaciones */}
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          {/* Corregido a: /IMG/donaciones.png */}
          <img
            src="/IMG/donaciones.png"
            alt="Destino de Donaciones"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-secondary fw-bold mb-3">
            Conoce dónde están destinadas las donaciones
          </h2>
          <p>
            Cada aporte se utiliza en proyectos sociales auditados y
            transparentes. Nuestro compromiso es mostrarte claramente cómo se
            invierten los recursos, asegurando confianza y responsabilidad en
            cada acción.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Transparencia;
