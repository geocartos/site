import React from 'react'
import './Barra.css';
import { NavLink } from 'react-router-dom';

import iniciandorevolucion1 from '../../../images/blog/iniciorevolucion.jpeg';
import evolucionSIG1 from '../../../images/blog/evolucionSIG.jpg';
import selecciondesitios1 from '../../../images/blog/selecciondesitios.jpeg';

export const Barra = () => {
  return (
    <div>

{/* Barra*/}

<div className="col-md-12 Barra">
   <img className="card-img-top " src={iniciandorevolucion1} alt=" " />
   <h2>La Revolución Geoespacial sólo está iniciando</h2>
   <h4><NavLink to="/La_Revolucion_Geoespacial_solo_esta_iniciando">Continuar leyendo</NavLink></h4>

   <img className="card-img-top " src={evolucionSIG1} alt=" " />
   <h2>Evolución de los SIG</h2>
   <h4><NavLink to="/Evolucion_de_los_SIG">Continuar leyendo</NavLink></h4>

   <img className="card-img-top " src={selecciondesitios1} alt=" " />
   <h2>Importancia de los GIS en la selección de sitios</h2>
   <h4><NavLink to="/Importancia de los GIS en la selección de sitios">Continuar leyendo</NavLink></h4>

</div>



    </div>
  )
}

