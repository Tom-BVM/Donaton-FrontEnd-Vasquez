import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { iniciarSesion } from "../Services/Api";

function Login() {
  const [form, setForm] = useState({ correo: "", contraseña: "" });
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

    try {
      const res = await iniciarSesion(form);

      if (res.data === "Inicio de sesión correcto") {
        setEsExitoso(true);
        setMensaje("¡Inicio de sesión correcto! Redirigiendo...");

        localStorage.setItem("usuarioCorreo", form.correo);
        
        const nombreExtraido = form.correo.split('@')[0].toUpperCase();
        localStorage.setItem("usuarioNombre", nombreExtraido);

        localStorage.setItem("usuarioId", 1);

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setEsExitoso(false);
        setMensaje("Respuesta inesperada del servidor");
      }

    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setEsExitoso(false);
      setMensaje("Usuario o contraseña incorrectos");
    }
  };

  return (
    <>
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

          {mensaje && (
            <div 
              className={`text-center mt-3 alert ${esExitoso ? 'alert-success text-success' : 'alert-danger text-danger'}`} 
              style={{ fontWeight: '500', padding: '8px', borderRadius: '6px' }}
            >
              {mensaje}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
