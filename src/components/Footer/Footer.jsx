import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import logogeocartosfooter from '../../images/logo_geocartos_claro.png'

export const Footer = () => {
  return (
    <div>
      <section className='footer sectionfooter'>
        <div className="container">
          <div className="row footersuperior">
            
            {/* Logo + slogan */}
            <div className="col-md-3 col-sm-6 col-xs-12 segmento-uno md-mb-30 sm-mb-30">
  <img src={logogeocartosfooter} width="200" height="34" alt="" />
  <p>GIS for everyone, anywhere</p>
</div>


            {/* Contacto */}
            <div className="col-md-3 col-sm-6 col-xs-12 segmento-dos md-mb-30 sm-mb-30">
              <ul>
                <li>
                  <p><i className="fas fa-map-marker-alt"></i> Prol. 11 Sur 4701 Reforma Agua Azul, 72430 Puebla, Pue.</p>
                </li>
                <li>
                  <p><i className="fas fa-phone-alt"></i> Teléfonos: +52 22 22 54 07 75 / +52 22 24 39 76 47</p>
                </li>
                <li>
                  <p><i className="far fa-envelope"></i> geocartosmx@outlook.com</p>
                </li>
              </ul>
            </div>

            {/* Blog */}
            <div className="col-md-3 col-sm-6 col-xs-12 segmento-tres sm-mb-30">
              <h2>Blog</h2>
              <p>Mantente actualizado de lo último en GIS</p>  
              <NavLink className="text-secondary" to="/Blog">Blog</NavLink>
            </div>

            {/* Redes sociales */}
            <div className="col-md-3 col-sm-6 col-xs-12 segmento-cuatro sm-mb-30">
              <h2>Redes sociales</h2>
              <p>Síguenos en nuestras redes sociales</p>
              <a href="https://www.facebook.com/geocartos" className="facebook">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/company/geocartos">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer inferior */}
        <div className="container-fluid">
          <div className="row footerinferior">
            <div className="col-md-10">
              <p className="footer-bottom-text">
                &copy; 2025 Geocartos S.A. de C.V. Todos los derechos reservados.
              </p>
            </div>
            <div className="col-md-2">
              <NavLink className="text-secondary" to="/privacidad">Privacidad</NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
