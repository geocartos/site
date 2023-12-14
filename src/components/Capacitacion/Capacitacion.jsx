import React from 'react'
import './Capacitacion.css';
import { Footer } from '../Footer/Footer';
import capacitacionnota1 from '../../images/capacitacion/capacitacionnota1.png';
import capacitacionnota2 from '../../images/capacitacion/capacitacionnota2.png';
import capacitaciongis from '../../images/capacitacion/capacitacionGISmini.png';
import arcgis from '../../images/capacitacion/arcgis.png';
import qgis from '../../images/capacitacion/qgis.png';

import { NavLink } from 'react-router-dom'


export const Capacitacion = () => {
  return (
    <div>

{/* Portada Capacitacion*/}
<section className="portadacapacitacion">

<div className="container-fluid portadacapa">
  <div className="row">
    <div className="col-md-12  col-sm-12  col-xs-12 text-center">
      <h1>Capacitación</h1>
    </div>
  </div>
</div>

</section>

{/* Notas Capacitacion*/}
<div className="container notas">
  <div className="row">
    <div className="col-md-6  col-sm-6  col-xs-12 text-center ">
      <img src={capacitacionnota1} alt="" />
      <h4>Programas Actualizados</h4>
      <p>Actualizamos constantemente las clases, conforme a actualizaciones más reciente del software </p>
    </div>

    <div className="col-md-6  col-sm-6  col-xs-12 text-center">
      <img src={capacitacionnota2} alt="" />
      <h4>Cursos Personalizados</h4>
      <p>Dinos que es lo que te interesa aprender y ajustamos un programa propio </p>
    </div>  
  </div>
</div> 

{/* Contenedor TextoImagen Capacitacion*/}
<section className="conttextoimagencapacitacion1">
  <div className=".container-fluid contenedortipoTI"> 
    <div className="row">

      <div className="col-md-6 c1texto">

        <h2>Formación que impulsa tus habilidades en GIS</h2>

        <p>Capacitación profesional y personalizada en Sistemas de Información Geográfica</p>


      </div>

      <div className="col-md-6 c1imagen">
        <img src={capacitaciongis} className="img-fluid" alt="" />
      </div>
    </div>
  </div>
</section>



{/* Contenedor Cartas*/}
<section className="cartascapacitacion">
<div className="cartascapacitacion">
    <div className="container">
      <div className='row'>
      <div className="shadow-sm p-3 mb-5 bg-white rounded col-md-5  col-sm-5  col-xs-12" id='targeton'>
          <img className="card-img-top " src={qgis} alt=" " />
          <div className="card-body">
            <h5 className="card-title">QGIS</h5>
            <p className="card-text">Aprende a realizar mapas, manipular y procesar datos geoespaciales en QGIS</p>
          </div>
    </div>  

    <div className="shadow-sm p-3 mb-5 bg-white rounded col-md-5  col-sm-5  col-xs-12" id='targeton'>
    <img className="card-img-top" src={arcgis}  alt=" " />
          <div className="card-body">
            <h5 className="card-title">ArcGIS</h5>
            
            
              <p><i className="fas fa-map-marker-alt"></i> Online</p>
              <p><i className="fa-duotone fa-calendar"></i> 14/08/2023 al 23/06/2022</p>
              <p><i className="fa-solid fa-clock"></i> 15 hrs</p>
              <p><i className="fa-solid fa-money-bill-simple-wave"></i> $750 peso mexicano </p>

              <p class="card-text">Aprende a realizar mapas, manipular y procesar datos geoespaciales en ArcGIS</p>
            
            <button type="button" class="btn btn-outline-info"><NavLink to="/Cursoarcgis">Más Información</NavLink></button>
          </div>
    </div>  

      </div>
    </div>
</div>

</section>

<Footer />
    </div>
  )
}

