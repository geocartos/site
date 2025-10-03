import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logogeocartos from '../../images/logo_geocartos.png';

export const Header = () => {
  return (
    <header style={{color:"white"}}>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="navbar">
        <div className="container navbar">

          <NavLink className="navbar-brand" to="/Home">
            <img src={logogeocartos} width="200" height="34" alt="Logo Geocartos" />
          </NavLink>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">

              <li className="nav-item active">
                <NavLink className="nav-link" to="/Home">Home</NavLink>
              </li>

              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  id="solucionesDropdown" 
                  href="/" 
                  role="button" 
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false">
                  Soluciones
                </a>
                <div className="dropdown-menu" aria-labelledby="solucionesDropdown">
                  <NavLink className="dropdown-item" to="/IngenieriayConstruccion">Infraestructura</NavLink>
                  <NavLink className="dropdown-item" to="/GobiernoySociedad">Gobierno y Sociedad</NavLink>
                  <NavLink className="dropdown-item" to="/RecursosNaturalesyMedioAmbiente">Recursos Naturales y Ambiente</NavLink>
                  <NavLink className="dropdown-item" to="/Logistica">Logística</NavLink>
                  <NavLink className="dropdown-item" to="/MarketingyNegocios">Marketing y Negocios</NavLink>
                  <NavLink className="dropdown-item" to="/Capacitacion">Capacitación</NavLink>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  id="tecnologiasDropdown" 
                  href="/" 
                  role="button" 
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false">
                  Tecnologías
                </a>
                <div className="dropdown-menu" aria-labelledby="tecnologiasDropdown">
                  <NavLink className="dropdown-item" to="/Geografiadigital">Geografía Digital</NavLink>
                  <NavLink className="dropdown-item" to="/TeledeteccionySensores">Teledetección y Sensores Remotos</NavLink>
                  <NavLink className="dropdown-item" to="/Plataformasdigitales">Plataformas Digitales y Webmapping</NavLink>
                </div>
              </li>

              <li className="nav-item">
                <NavLink 
                  to="/Contacto" 
                  className="btn btn-outline-secondary nav-contacto">
                  Contacto
                </NavLink>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}
