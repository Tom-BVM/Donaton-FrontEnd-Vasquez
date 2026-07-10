import axios from "axios";

const axiosConfig = {
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  }
};

const apiAuth = axios.create({ baseURL: "http://localhost:8081/api/auth", ...axiosConfig });
const apiDonaciones = axios.create({ baseURL: "http://localhost:8082/api/donaciones", ...axiosConfig });
const apiLogistica = axios.create({ baseURL: "http://localhost:8083/api/logistica", ...axiosConfig });
const apiNecesidades = axios.create({ baseURL: "http://localhost:8084/api/necesidades", ...axiosConfig });

// -------------------- AUTH --------------------
export const registrarUsuario = (usuario) => 
  apiAuth.post("/registrar", usuario);

export const iniciarSesion = (usuario) => 
  apiAuth.post("/iniciar-sesion", usuario);

// -------------------- DONACIONES --------------------
export const crearDonacion = (donacion) => 
  apiDonaciones.post("/", donacion);

export const listarDonaciones = () => 
  apiDonaciones.get("/");

// -------------------- LOGÍSTICA --------------------
export const crearEnvio = (envio) => 
  apiLogistica.post("/envio", envio);

export const listarEnvios = () => 
  apiLogistica.get("/envios");

// -------------------- NECESIDADES --------------------
export const crearNecesidad = (necesidad) => 
  apiNecesidades.post("/", necesidad);

export const listarNecesidades = () => 
  apiNecesidades.get("/");
