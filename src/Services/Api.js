import axios from "axios";

// URL de los microservicios
const API_AUTH = "http://localhost:8081/api/auth";
const API_DONACIONES = "http://localhost:8082/api/donaciones";
const API_LOGISTICA = "http://localhost:8083/api/logistica";
const API_NECESIDADES = "http://localhost:8084/api/necesidades";

// -------------------- AUTH --------------------
export const registrarUsuario = (usuario) =>
  axios.post(`${API_AUTH}/registrar`, usuario);

export const iniciarSesion = (usuario) =>
  axios.post(`${API_AUTH}/iniciar-sesion`, usuario);

// -------------------- DONACIONES --------------------
export const crearDonacion = (donacion) =>
  axios.post(API_DONACIONES, donacion);

export const listarDonaciones = () =>
  axios.get(API_DONACIONES);

// -------------------- LOGÍSTICA --------------------
export const crearEnvio = (envio) =>
  axios.post(`${API_LOGISTICA}/envio`, envio);

export const listarEnvios = () =>
  axios.get(`${API_LOGISTICA}/envios`);

// -------------------- NECESIDADES --------------------
export const crearNecesidad = (necesidad) =>
  axios.post(API_NECESIDADES, necesidad);

export const listarNecesidades = () =>
  axios.get(API_NECESIDADES);
