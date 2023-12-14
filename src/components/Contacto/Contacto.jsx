import React from 'react'
import './Contacto.css'
import { Footer } from '../Footer/Footer'
import geocartoscontacto from '../../images/contacto/geocartos.svg'


export const Contacto = () => {
  return (
    <div>

<section className="contenedorcontacto">
  <div className="container">
    <div className="row">
      
      <div className="col-md-6">

        <div className="card">
          <div className="card-body">
            <ul>
              <br/>

<h1>Contactanos</h1>
<br/>
<h2>
  ¿Tienes alguna pregunta o consulta sobre Geocartos y nuestros servicios? 
</h2>
<br/>
<h2>
  Te proporcionamos las siguientes opciones para encontrar la mejor manera de contactarnos.
</h2>
              
<br/>
<br/>


              <li><p><i className="fas fa-map-marker-alt"></i>  Prol. 11 Sur 4701 Reforma Agua Azul, 72430 Puebla, Pue.</p></li>
              <br/>
              <li><p><i className="fas fa-phone-alt"></i> Telefonos: +52 22 22 54 07 75 / +52 22 24 39 76 47</p></li>
              <br/>
              <li><p><i className="far fa-envelope"></i> geocartosmx@outlook.com</p></li>
              <br/>
              <li><p><i className="fas fa-video"></i> Pide una reunión virtual </p></li>
            </ul>
          </div>
        </div>

      </div>
      <div className="col-md-6">
        <img src={geocartoscontacto} alt="" />
      </div>
    </div>
  </div>
</section>


<Footer />
    </div>
  )
}
