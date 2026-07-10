# Donatón - Frontend Platform 🚀

Plataforma web moderna y minimalista diseñada para la gestión, recaudación y seguimiento transparente de donaciones monetarias y en especie (ropa, insumos y materiales). Este repositorio corresponde al ecosistema Frontend de la aplicación, construido bajo una arquitectura distribuida basada en microservicios independientes.

---

## 🛠️ Tecnologías y Herramientas Utilizadas

- **Frontend core:** React.js (Hooks, Context, Renderizado Condicional).
- **Diseño y UX:** Bootstrap 5 (Estilos responsivos y componentes minimalistas).
- **Conexión de Red:** Axios (Gestión de peticiones asincrónicas HTTP).
- **Enrutamiento:** React Router DOM (Estructura de navegación SPA).
- **Contenedores:** Docker & Docker Compose (Orquestación del entorno).
- **Calidad de Código:** SonarQube (Análisis estático de seguridad y deuda técnica).

---

## 💻 Características Implementadas (UX / UI)

- **Auto-Login Eficiente:** Al registrar una cuenta nueva, el sistema inicia la sesión automáticamente guardando los datos de control de forma local, evitando fricciones al usuario.
- **Flujo de Autenticación Visual:** Reemplazo de textos planos del backend por alertas dinámicas integradas en el formulario (verde para éxito, rojo para errores) con redirección automatizada en 1 segundo.
- **Barra de Navegación Dinámica:** Saludo personalizado minimalista `Hola, {NOMBRE}!` que reemplaza al botón de cuenta tradicional cuando existe una sesión activa, incluyendo un botón integrado de cierre de sesión.
- **Módulo de Donaciones Optimizado:** Tarjetas visuales interactivas con barras de progreso animadas para causas específicas. Formulario alineado estrictamente con los campos relacionales del backend (`tipo`, `cantidad`, `fecha`, `usuarioId`).
- **Sistema de Envíos Transparente:** Sección dedicada al seguimiento logístico activo mediante líneas de tiempo (*Steppers*) al medio de la pantalla para monitorear el estado físico de la ayuda (Preparación ➔ Enviada ➔ En camino ➔ Llegada).

---

## 🏛️ Vista de Páginas Incluidas

- `Home.js`: Panel principal de bienvenida y acceso rápido.
- `Login.js`: Formulario seguro de acceso conectado al microservicio de Auths.
- `CrearCuenta.js`: Formulario de registro con validaciones estrictas y auto-login.
- `Donaciones.js`: Interfaz de recaudación monetaria y derivación de ayuda material.
- `Seguimientos.js`: Monitor de logística y estados de transporte en tiempo real.
- `Transparencia.js`: Panel informativo de rendición de cuentas.

---

## 🚀 Requisitos Previos

Antes de levantar el proyecto, asegúrate de tener instalado en tu computadora:
- [Git](https://git-scm.com)
- [Docker Desktop](https://docker.com)

---

## 📦 Instalación y Despliegue Express

Sigue estos pasos en tu terminal para clonar, instalar y levantar la plataforma completa de forma automática utilizando contenedores:

### 1. Clonar el repositorio
```bash
git clone https://github.com
cd Donaton-FrontEnd-Vasquez
```

### 2. Limpiar residuos previos de Docker (Opcional)
```bash
docker compose down --volumes --rmi all
docker system prune -f
```

### 3. Construir y encender el ecosistema completo
Este comando compilará el código, instalará las dependencias de NPM de forma aislada, enlazará las redes internas y levantará la aplicación web junto al servidor de SonarQube en paralelo:
```bash
docker compose up --build
```

### 4. Acceso en el navegador
Una vez que la terminal se estabilice, abre las siguientes direcciones:
- **Plataforma Web (React):** `http://localhost:3000`
- **Panel de Calidad (SonarQube):** `http://localhost:9000`
