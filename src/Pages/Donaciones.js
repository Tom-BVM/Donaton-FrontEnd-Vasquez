import React, { useState, useEffect } from "react";
import { crearDonacion, listarDonaciones } from "../Services/Api";

function Donaciones() {
  const [donaciones, setDonaciones] = useState([]);
  const [monto, setMonto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [causaSeleccionada, setCausaSeleccionada] = useState("");

  // Cargar donaciones al iniciar
  useEffect(() => {
    listarDonaciones()
      .then((res) => setDonaciones(res.data))
      .catch((err) => console.error("Error al listar donaciones:", err));
  }, []);

  // Crear nueva donación
  const handleDonar = async (e) => {
    e.preventDefault();
    if (parseInt(monto) < 500) {
      alert("El monto mínimo para donar es de 500 CLP");
      return;
    }
    try {
      const nueva = { monto, descripcion: causaSeleccionada || descripcion };
      await crearDonacion(nueva);
      alert("Donación creada con éxito");
      const res = await listarDonaciones();
      setDonaciones(res.data);
      setMonto("");
      setDescripcion("");
      setCausaSeleccionada("");
    } catch (err) {
      alert("Error al crear donación: " + err.message);
    }
  };

  // Causas predefinidas
  const causas = [
    { id: 1, titulo: "Incendios en Valparaíso", meta: 35000000, recaudado: 19209075, color: "success" },
    { id: 2, titulo: "Inundaciones en el Sur", meta: 15000000, recaudado: 14550198, color: "info" },
    { id: 3, titulo: "Campamento Nacional", meta: 20000000, recaudado: 2643090, color: "warning" },
  ];

  return (
    <div className="container my-5">
      {/* Título principal original */}
      <h1 className="text-primary fw-bold text-center mb-4">Donaciones</h1>

      {/* Mini tarjetas de causas */}
      <div className="row mb-5">
        {causas.map((c) => {
          const porcentaje = Math.round((c.recaudado / c.meta) * 100);
          return (
            <div key={c.id} className="col-md-4 mb-4">
              <div className="card shadow h-100 p-3">
                <h5 className="text-center">{c.titulo}</h5>
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <h6>Recaudado</h6>
                    <h4>{c.recaudado.toLocaleString("es-CL")}</h4>
                  </div>
                  <div className="text-end">
                    <h6>Meta</h6>
                    <h4>${c.meta.toLocaleString("es-CL")}</h4>
                  </div>
                </div>
                <div className="progress mb-3">
                  <div
                    className={`progress-bar progress-bar-striped progress-bar-animated bg-${c.color}`}
                    style={{ width: `${porcentaje}%` }}
                  >
                    {porcentaje}%
                  </div>
                </div>
                <div className="d-grid">
                  <button
                    className={`btn btn-${c.color}`}
                    onClick={() => setCausaSeleccionada(c.titulo)}
                  >
                    Donar a esta causa
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Opciones de donación en especie */}
      <div className="mb-5">
        <h2 className="fw-bold text-secondary mb-3">Donaciones en especie</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card shadow p-3 h-100">
              <h5>Ropa en buen estado</h5>
              <p>Apoya con vestimenta para familias afectadas.</p>
              <button className="btn btn-outline-dark">Donar ropa</button>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow p-3 h-100">
              <h5>Insumos básicos</h5>
              <p>Agua, detergente y artículos de primera necesidad.</p>
              <button className="btn btn-outline-dark">Donar insumos</button>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow p-3 h-100">
              <h5>Materiales (empresas)</h5>
              <p>Apoyo empresarial con materiales de construcción y logística.</p>
              <button className="btn btn-outline-dark">Donar materiales</button>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario general */}
      <form onSubmit={handleDonar} className="mb-4">
        <h2 className="fw-bold mb-3" style={{ color: "black" }}>
          Donar a la fundación
        </h2>
        <input
          type="number"
          placeholder="Monto mínimo: 500 CLP"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          className="form-control mb-2"
        />
        <input
          type="text"
          placeholder="Descripción (opcional)"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="form-control mb-2"
          disabled={!!causaSeleccionada}
        />
        {causaSeleccionada && (
          <p className="text-muted">
            Donando directamente a: <strong>{causaSeleccionada}</strong>
          </p>
        )}
        <button type="submit" className="btn btn-success">
          Donar
        </button>
      </form>

      {/* Lista de donaciones */}
      <h2 className="text-secondary fw-bold mb-3">Historial</h2>
      <ul className="list-group">
        {donaciones.map((d) => (
          <li key={d.id} className="list-group-item">
            {d.monto} CLP — {d.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Donaciones;
