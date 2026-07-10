import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registrarUsuario } from "../Services/Api"; // IMPORTACIÓN AGREGADA: Esto faltaba para que no fallara

function CrearCuenta() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    anio: "",
    password: "",
    password2: ""
  });

  const [mensaje, setMensaje] = useState("");
  const [esExitoso, setEsExitoso] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");
    setEsExitoso(false);

    if (form.password !== form.password2) {
      setMensaje("Las contraseñas no coinciden");
      return;
    }

    try {
      // Ahora sí se ejecutará correctamente al estar importada arriba
      const res = await registrarUsuario({
        nombre: form.nombre,
        correo: form.correo,
        anio: form.anio,
        contraseña: form.password
      });

      if (res.data && res.data.nombre) {
        setEsExitoso(true);
        setMensaje(`¡Cuenta creada con éxito! Bienvenido/a ${res.data.nombre}. Ingresando...`);

        localStorage.setItem("usuarioCorreo", form.correo);
        // CORRECCIÓN: .toUpperCase() se aplica al string, no al arreglo .split()
        localStorage.setItem("usuarioNombre", form.nombre.toUpperCase());
        localStorage.setItem("usuarioId", res.data.id || 1);

        // REDIRECCIÓN CORRECTA: Te enviará directo a tu componente Home asignado a "/"
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }

    } catch (error) {
      console.error("Error:", error);
      setEsExitoso(false);
      setMensaje("Hubo un problema al crear la cuenta o el correo ya está registrado");
    }
  };

  return (
    <>
      {/* Formulario Crear Cuenta */}
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow p-4 formulario-login" style={{ maxWidth: "500px", width: "100%" }}>
          <h2 className="text-center mb-4">Crear Cuenta</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre completo</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Ej: Juan Pérez"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="correo" className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                id="correo"
                placeholder="Ej: usuario@correo.com"
                value={form.correo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="anio" className="form-label">Año de nacimiento</label>
              <input
                type="number"
                className="form-control"
                id="anio"
                placeholder="Ej: 2000"
                min="1900"
                max="2026"
                value={form.anio}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Mínimo 8 caracteres"
                minLength="8"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password2" className="form-label">Repite la contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password2"
                placeholder="Confirma tu contraseña"
                minLength="8"
                value={form.password2}
                onChange={handleChange}
                required
              />
            </div>

            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-success">Crear cuenta</button>
            </div>

            <div className="text-center">
              <a href="/login" className="btn btn-outline-success">Volver al inicio de sesión</a>
            </div>
          </form>

          {mensaje && (
            <div 
              className={`text-center mt-3 alert ${esExitoso ? 'alert-success text-success' : 'alert-danger text-danger'}`} 
              style={{ fontWeight: "500", padding: "8px", borderRadius: "6px" }}
            >
              {mensaje}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CrearCuenta;
