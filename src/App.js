import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CrearCuenta from "./Pages/CrearCuenta";
import Login from "./Pages/Login";
import Transparencia from "./Pages/Transparencia";
import Donaciones from "./Pages/Donaciones";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crear-cuenta" element={<CrearCuenta />} />
        <Route path="/login" element={<Login />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/donaciones" element={<Donaciones/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
