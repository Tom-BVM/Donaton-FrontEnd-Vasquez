import React, { useState } from "react";
import { iniciarSesion } from "../Services/Api";

function Login() {
  const [form, setForm] = useState({ correo: "", contraseña: "" });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await iniciarSesion(form);

      localStorage.setItem("usuarioId", res.data.id || 1);

      setMensaje("Login exitoso: " + res.data);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setMensaje("Usuario o contraseña incorrectos");
    }
  };

  return (
    <>
      {/* Formulario Login */}
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow p-4 formulario-login" style={{ maxWidth: "400px", width: "100%" }}>
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">Correo</label>
              <input
                type="email"
                className="form-control"
                id="correo"
                placeholder="Ingresa tu correo"
                value={form.correo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contraseña" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="contraseña"
                placeholder="Ingresa tu contraseña"
                value={form.contraseña}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Ingresar</button>
            </div>
          </form>
          <div className="text-center mt-3">
            <a href="#">¿Olvidaste tu contraseña?</a><br />
            <a href="/crear-cuenta">Crear cuenta nueva</a>
          </div>
          <div className="text-center mt-3 text-danger">{mensaje}</div>
        </div>
      </div>
    </>
  );
}

export default Login;
