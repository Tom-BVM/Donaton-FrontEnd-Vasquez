import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-4 mt-5">
      <div className="container">
        <div className="d-flex justify-content-center text-center flex-wrap">
          <div className="mx-4 mb-4">
            <h5>Conócenos</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Qué hacemos</a></li>
              <li><a href="#" className="text-white text-decoration-none">Quiénes somos</a></li>
              <li><a href="#" className="text-white text-decoration-none">Historia</a></li>
            </ul>
          </div>

          <div className="mx-4 mb-4">
            <h5>¿Cómo ayudar?</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Apoya una causa</a></li>
              <li><a href="#" className="text-white text-decoration-none">Donación</a></li>
              <li><a href="#" className="text-white text-decoration-none">Voluntariado</a></li>
            </ul>
          </div>

          <div className="mx-4 mb-4">
            <h5>Explora</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Transparencia</a></li>
              <li><a href="#" className="text-white text-decoration-none">Noticias</a></li>
              <li><a href="#" className="text-white text-decoration-none">Preguntas frecuentes</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contacto</a></li>
            </ul>
          </div>
        </div>

        {/* Síguenos debajo */}
        <div className="text-center mt-4">
          <h5>Síguenos</h5>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="me-3">
              <a href="#"><img src="img/Facebook.png" alt="Facebook" width="30" /></a>
            </li>
            <li className="me-3">
              <a href="#"><img src="img/instagram.png" alt="Instagram" width="30" /></a>
            </li>
            <li className="me-3">
              <a href="#"><img src="img/x.png" alt="x" width="30" /></a>
            </li>
            <li>
              <a href="#"><img src="img/youtube.png" alt="YouTube" width="30" /></a>
            </li>
            <li className="ms-3">
                <a href="#"><img src="img/tiktok.png" alt="TikTok" width="30" /></a>
            </li>
          </ul>
        </div>

        <p className="text-center mt-3 mb-0">
          &copy; 2026 Donaton – Ayuda Humanitaria. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
