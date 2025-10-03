import React from 'react';
import './Contacto.css';
import { Footer } from '../Footer/Footer';
import geocartoscontacto from '../../images/contacto/geocartos.svg';

export const Contacto = () => {
  return (
    <div>
      <section className="contenedorcontacto">
        <div className="container">
          <div className="row">
            
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h1 className="mb-3">Contáctanos</h1>
                  <h2 className="mb-3">
                    ¿Tienes alguna pregunta o consulta sobre Geocartos y nuestros servicios?
                  </h2>
                  <h2 className="mb-4">
                    Te proporcionamos las siguientes opciones para encontrar la mejor manera de contactarnos.
                  </h2>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-map-marker-alt"></i> Prol. 11 Sur 4701 Reforma Agua Azul, 72430 Puebla, Pue.
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-phone-alt"></i> Teléfonos: +52 22 22 54 07 75 / +52 22 24 39 76 47
                    </li>
                    <li className="mb-2">
                      <i className="far fa-envelope"></i> geocartosmx@outlook.com
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-video"></i> Pide una reunión virtual
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <img src={geocartoscontacto} alt="Geocartos Contacto" className="img-fluid" />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
