import React from "react";

function Seguimientos() {
  const causasLogistica = [
    { id: 1, titulo: "Ayuda a Venezuela", estadoActual: "enviada", detalle: "Cargamento de insumos médicos y alimentos básicos" },
    { id: 2, titulo: "Ayuda al Sur de Chile", estadoActual: "camino", detalle: "Despacho de kits de herramientas y mantas de abrigo" },
    { id: 3, titulo: "Ayuda a Campamentos (Ropa)", estadoActual: "preparacion", detalle: "Clasificación y embalaje de vestimenta recolectada" },
    { id: 4, titulo: "Ayuda a Incendios Forestales (Agua)", estadoActual: "llegada", detalle: "Entrega masiva de agua embocada a centros de acopio" },
  ];

  const pasos = [
    { clave: "preparacion", texto: "Donación en preparación" },
    { clave: "enviada", texto: "Donación enviada" },
    { clave: "camino", texto: "En camino" },
    { clave: "llegada", texto: "Llegada" }
  ];

  const obtenerClasePaso = (estadoActual, clavePaso) => {
    const orden = ["preparacion", "enviada", "camino", "llegada"];
    const indiceActual = orden.indexOf(estadoActual);
    const indicePaso = orden.indexOf(clavePaso);

    if (indicePaso < indiceActual) return "bg-success text-white border-success";
    if (indicePaso === indiceActual) return "bg-primary text-white border-primary fw-bold";
    return "bg-light text-muted border-secondary-subtle";
  };

  return (
    <div className="container my-5" style={{ minHeight: "80vh" }}>
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-primary">Sistema de Envíos</h1>
        <p className="text-muted fs-5">Monitorea en tiempo real el traslado logístico de las ayudas recolectadas</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h3 className="fw-bold mb-4 text-dark text-center border-bottom pb-2">Seguimientos activos:</h3>
          
          {causasLogistica.map((causa) => (
            <div key={causa.id} className="card shadow-sm p-4 mb-4 border-0 bg-white rounded-3">
              <div className="text-center mb-4">
                <h4 className="fw-bold text-secondary mb-1">{causa.titulo}</h4>
                <small className="text-muted d-block">{causa.detalle}</small>
              </div>

              <div className="position-relative d-flex justify-content-between align-items-center mx-auto my-3" style={{ maxWidth: "800px" }}>
                
                <div 
                  className="position-absolute start-0 end-0 bg-secondary-subtle" 
                  style={{ height: "4px", top: "50%", transform: "translateY(-50%)", zIndex: 0 }}
                ></div>

                {pasos.map((paso) => (
                  <div key={paso.clave} className="text-center position-relative" style={{ zIndex: 1, width: "150px" }}>
                    <div 
                      className={`rounded-circle mx-auto d-flex align-items-center justify-content-center border border-3 shadow-sm ${obtenerClasePaso(causa.estadoActual, paso.clave)}`}
                      style={{ width: "40px", height: "40px", fontSize: "14px" }}
                    >
                      ✓
                    </div>
                    <div className="mt-2 text-wrap px-1" style={{ fontSize: "0.85rem", fontWeight: causa.estadoActual === paso.clave ? "600" : "400" }}>
                      {paso.texto}
                    </div>
                  </div>
                ))}

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Seguimientos;
