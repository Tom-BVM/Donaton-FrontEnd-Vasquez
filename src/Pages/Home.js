import React from "react";

function Home() {
    return (
        <>
            <div>

                {/* Carrusel */}
                <div id="carruselDonaton" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="img/IncendioDonaton.png" className="d-block w-100" alt="incendios" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Llegada rápida a ayudar</h5>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="img/TerremotoDonaton.png" className="d-block w-100" alt="terremotos" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Reconstrucción a los que perdieron su hogar</h5>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="img/AyudaDonaton.png" className="d-block w-100" alt="ayudas concluidas" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Impacto real</h5>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carruselDonaton" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carruselDonaton" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carruselDonaton" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#carruselDonaton" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#carruselDonaton" data-bs-slide-to="2"></button>
                    </div>
                </div>
            </div>

            {/* Banner */}
            <div className="banner">
                <h1 className="titulo-banner">Sumate a la ayuda</h1>
                <h5>#Ayuda</h5>
            </div>

            <div className="banner">
                <p className="texto-banner">
                    Tu donación puede marcar la diferencia en la vida de quienes más lo necesitan.
                    Únete a nosotros para brindar apoyo a las personas afectadas por desastres naturales o de quienes lo provocan.
                    Juntos, podemos reconstruir vidas y comunidades enteras.
                </p>
            </div>

            {/* Sección de ayuda */}
            <div className="container mt-4">
                <div className="row justify-content-center">

                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card shadow p-3 h-100">
                            <img src="img/IncendioValparaisoDonar.jpg" className="card-img-top" alt="Ayuda 1" />
                            <div className="card-body text-center">
                                <p className="card-text">
                                    Apoya en esta donación para estas familias que lo perdió todo en los incendios de Valparaíso.
                                </p>

                                <div className="d-flex justify-content-between mb-2">
                                    <div>
                                        <h6>Llevamos recaudado</h6>
                                        <h4>19.209.075</h4>
                                    </div>
                                    <div className="text-end">
                                        <h6>Meta</h6>
                                        <h4>$35.000.000</h4>
                                    </div>
                                </div>

                                <div className="progress mb-3">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: "55%" }}>
                                    55%
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-success">Donar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card shadow p-3 h-100">
                            <img src="img/ChileInundacionDonacion.webp" className="card-img-top" alt="Ayuda 2" />
                            <div className="card-body text-center">
                                <p className="card-text">
                                    Apoya a esta comunidad afectada por inundaciones en el sur de Chile.
                                </p>

                                <div className="d-flex justify-content-between mb-2">
                                    <div>
                                        <h6>Llevamos recaudado</h6>
                                        <h4>14.550.198</h4>
                                    </div>
                                    <div className="text-end">
                                        <h6>Meta</h6>
                                        <h4>$15.000.000</h4>
                                    </div>
                                </div>

                                <div className="progress mb-3">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: "97%" }}>
                                    97%
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-info">Donar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-8">
                    <div className="card shadow p-3 h-100">
                        <img src="img/CampamentoDonacion.jpg" className="card-img-top" alt="Ayuda 3" />
                        <div className="card-body text-center">
                        <p className="card-text">
                            Campaña nacional para apoyar a múltiples familias en situación crítica de insalubridad y vivienda.
                        </p>

                        <div className="d-flex justify-content-between mb-2">
                            <div>
                            <h6>Llevamos recaudado</h6>
                            <h4>2.643.090</h4>
                            </div>
                            <div className="text-end">
                            <h6>Meta</h6>
                            <h4>$20.000.000</h4>
                            </div>
                        </div>

                        <div className="progress mb-3">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{ width: "13%" }}>
                            13%
                            </div>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-warning">Donar</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>


            {/* Conoce nuestros proyectos */}
            <div className="container my-5">
                <div className="row mb-4">
                    <div className="col-12 nuestros-proyectos">
                        <h2>Nuestros Proyectos</h2>
                        <p>
                            No solo reaccionamos ante las catástrofes naturales; 
                            actuamos con la misma fuerza frente al terremoto social que viven miles de familias. 
                            Estamos desplegados en todos los rincones del país, entregando soluciones rápidas y 
                            eficientes donde más se necesita.
                        </p>
                    </div>
                </div>

                <div className="row g-4 proyectos">
                    <div className="col-md-6">
                        <div className="card shadow h-100 p-3">
                            <h3>Voluntariado en Incendios</h3>
                            <p>Apoyo a familias afectadas.</p>
                            <a href="/voluntariado" className="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow h-100 p-3">
                            <h3>Reconstrucción Maule-Biobío</h3>
                            <p>Iniciativas para levantar comunidades.</p>
                            <a href="/reconstruccion" className="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow h-100 p-3">
                            <h3>Creación de Escuela</h3>
                            <p>Educación para niños en zonas vulnerables.</p>
                            <a href="/escuela" className="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow h-100 p-3">
                            <h3>Empresas Aliadas</h3>
                            <p>Colaboración con empresas solidarias.</p>
                            <a href="/empresas" className="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
