import React, { useState, useEffect } from "react";
import { crearDonacion, listarDonaciones } from "../Services/Api";

function Donaciones() {
  const [donaciones, setDonaciones] = useState([]);
  const [monto, setMonto] = useState("");
  const [causaSeleccionada, setCausaSeleccionada] = useState("");
  
  const [mensaje, setMensaje] = useState("");
  const [esExitoso, setEsExitoso] = useState(false);

  const usuarioIdLogueado = localStorage.getItem("usuarioId") || 1;

  useEffect(() => {
    listarDonaciones()
      .then((res) => setDonaciones(res.data))
      .catch((err) => console.error("Error al listar donaciones:", err));
  }, []);

  const handleDonar = async (e) => {
    e.preventDefault();
    setMensaje("");
    setEsExitoso(false);

    if (parseInt(monto) < 500) {
      setMensaje("El monto mínimo para donar es de 500 CLP");
      return;
    }
    
    try {
      const nuevaDonacion = { 
        tipo: causaSeleccionada || "Donación General Monetaria", 
        cantidad: parseInt(monto),
        fecha: new Date().toISOString().split('T')[0],
        usuarioId: parseInt(usuarioIdLogueado)
      };
      
      await crearDonacion(nuevaDonacion);
      
      setEsExitoso(true);
      setMensaje(`¡Donación de $${parseInt(monto).toLocaleString("es-CL")} CLP creada con éxito!`);
      
      const res = await listarDonaciones();
      setDonaciones(res.data);
      setMonto("");
      setCausaSeleccionada("");
    } catch (err) {
      setEsExitoso(false);
      setMensaje("Error al crear donación: " + err.message);
    }
  };

  const handleDonacionEspecie = (tipoEspecie) => {
    setMensaje("");
    setEsExitoso(true);
    setMensaje(`Solicitud iniciada para: ${tipoEspecie}. Redirigiendo al formulario de logística...`);
  };

  const causas = [
    { id: 1, titulo: "Incendios en Valparaíso", meta: 35000000, recaudado: 19209075, color: "success" },
    { id: 2, titulo: "Inundaciones en el Sur", meta: 15000000, recaudado: 14550198, color: "info" },
    { id: 3, titulo: "Campamento Nacional", meta: 20000000, recaudado: 2643090, color: "warning" },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-primary fw-bold text-center mb-4">Donaciones</h1>

      {mensaje && (
        <div 
          className={`alert text-center mb-4 ${esExitoso ? 'alert-success text-success' : 'alert-danger text-danger'}`} 
          style={{ fontWeight: "500", borderRadius: "6px" }}
        >
          {mensaje}
        </div>
      )}

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
                    <h4>${c.recaudado.toLocaleString("es-CL")}</h4>
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
                    onClick={() => {
                      setCausaSeleccionada(c.titulo);
                      setMensaje(`Seleccionaste donar a: ${c.titulo}`);
                      setEsExitoso(true);
                    }}
                  >
                    Donar a esta causa
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mb-5">
        <h2 className="fw-bold text-secondary mb-3">Donaciones en especie</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card shadow p-3 h-100">
              <h5>Ropa en buen estado</h5>
              <p>Apoya con vestimenta para familias afectadas.</p>
              <button 
                className="btn btn-outline-dark" 
                onClick={() => handleDonacionEspecie("Ropa en buen estado")}
              >
                Donar ropa
              </button>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow p-3 h-100">
              <h5>Insumos básicos</h5>
              <p>Agua, detergente y artículos de primera necesidad.</p>
              <button 
                className="btn btn-outline-dark" 
                onClick={() => handleDonacionEspecie("Insumos básicos")}
              >
                Donar insumos
              </button>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow p-3 h-100">
              <h5>Materiales (empresas)</h5>
              <p>Apoyo empresarial con materiales de construcción y logística.</p>
              <button 
                className="btn btn-outline-dark" 
                onClick={() => handleDonacionEspecie("Materiales de construcción")}
              >
                Donar materiales
              </button>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleDonar} className="mb-4 p-4 border rounded bg-light shadow-sm">
        <h2 className="fw-bold mb-3" style={{ color: "black" }}>
          Donar a la fundación
        </h2>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Monto a donar (Mínimo: 500 CLP)"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            className="form-control"
            required
          />
        </div>
        {causaSeleccionada && (
          <div className="d-flex justify-content-between align-items-center mb-3 bg-white p-2 border rounded">
            <span className="text-muted">
              Destinado a: <strong>{causaSeleccionada}</strong>
            </span>
            <button 
              type="button" 
              className="btn btn-sm btn-link text-danger" 
              onClick={() => setCausaSeleccionada("")}
            >
              Cambiar a Donación General
            </button>
          </div>
        )}
        <button type="submit" className="btn btn-success px-4">
          Donar Monetariamente
        </button>
      </form>

      <h2 className="text-secondary fw-bold mb-3">Historial</h2>
      <ul className="list-group shadow-sm">
        {donaciones && donaciones.length > 0 ? (
          donaciones.map((d) => (
            <li key={d.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{d.tipo} (ID Usuario: {d.usuarioId})</span>
              <span className="badge bg-primary rounded-pill fs-6">
                ${parseInt(d.cantidad).toLocaleString("es-CL")} CLP
              </span>
            </li>
          ))
        ) : (
          <li className="list-group-item text-muted text-center py-3">No hay donaciones registradas aún.</li>
        )}
      </ul>
    </div>
  );
}

export default Donaciones;
