Donaton Frontend
Este repositorio contiene el frontend del proyecto Donaton, desarrollado en React. La aplicación permite a los usuarios interactuar con la plataforma solidaria, gestionando donaciones, necesidades y logística de manera sencilla y segura.

Tecnologías utilizadas
React con componentes funcionales y hooks.

JavaScript ES6+.

CSS y estilos personalizados.

Axios para comunicación con los microservicios backend.

Docker para despliegue y portabilidad.

Estructura del proyecto
frontend/
│── public/          # Archivos estáticos
│── src/
│   ├── components/  # Componentes reutilizables
│   ├── pages/       # Vistas principales
│   ├── services/    # Conexión con APIs backend
│   ├── App.js       # Configuración principal
│   └── index.js     # Punto de entrada
└── package.json     # Dependencias y scripts

Conexión con el backend
El frontend se comunica con los microservicios del backend mediante APIs REST.
Configura la URL base en src/services/api.js según tu entorno (local o dockerizado).

Contribución
Realizar cambios en ramas separadas.

Hacer pull requests para revisión.

Mantener buenas prácticas de código y estilo.
