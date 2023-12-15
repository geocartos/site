import React from 'react';
import './Plataformasdigitales.css';
import { Footer } from '../Footer/Footer';
import notaweb1 from '../../images/plataformas/notaweb1.jpg';
import notaweb2 from '../../images/plataformas/notaweb2.jpg';
import notaweb3 from '../../images/plataformas/notaweb3.jpg';
import notaweb4 from '../../images/plataformas/notaweb4.jpg';
import textoimagenint1 from '../../images/plataformas/tablerocontrol1.png';
import textoimagenint2 from '../../images/plataformas/tablerocontrol2.png';
import textoimagenint3 from '../../images/plataformas/tablerocontrol3.png';
import appmobil1 from '../../images/plataformas/appmobil1.png';
import visorweb1 from '../../images/plataformas/visorweb1.png';
import visorweb2 from '../../images/plataformas/visorweb2.png';
import visorweb3 from '../../images/plataformas/visorweb3.png';
import visorweb4 from '../../images/plataformas/visorweb4.png';
import basededatos from '../../images/plataformas/basesdedatosgeoespacial1.png';
import gestion from '../../images/plataformas/gestion.png';
import desarrollo from '../../images/plataformas/desarrollo.png';
import qgis from '../../images/plataformas/qgis.png';
import postgresql from '../../images/plataformas/postgresql.png';
import python from '../../images/plataformas/python.png';
import leaflet from '../../images/plataformas/leaflet.png';
import js from '../../images/plataformas/javascript.png';


export const Plataformasdigitales = () => {
  return (
    <div>


{/* Portada  Plataformas */}
<section className="portada">

  <div className="container-fluid portadaplataforma">
    <div className="row">
      <div className="col-md-6  col-sm-12  col-xs-12 text-center">
        <h1>Plataformas Digitales y Webmapping</h1>
      </div>
    </div>
  </div>
  
</section>

{/* Notas Plataformas */}
<div className="container notasplataformas">
  <div className="row">
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notaweb1} alt="" />
      <h2>Software</h2>
      <p>Desarrollo de portales WEB para la <strong>visualización y análisis espacial</strong>.</p>
    </div>
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notaweb2} alt="" />
      <h2>Visualización</h2>
      <p><strong>Representa tu información</strong> de una manera ágil y temática en linea </p>
    </div>
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notaweb3} alt="" />
      <h2>En Tiempo Real</h2>
      <p><strong>Monitorea y visualiza  datos</strong> o actividad completamente en tiempo real </p>
    </div>  
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notaweb4} alt="" />
      <h2>Plataformas</h2>
      <p>Desarrollo de plataformas digitales para la <strong>representación de información geográfica</strong> </p>
    </div>
  </div>
</div> 

{/* Contenedor Imagen Full Plataforma 1 */}
<section classname="contenedorfullimagenplataforma1">
  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 font-weight-normal">Simpler, Faster Spatial Analytics</h1>
      <p className="lead font-weight-normal">
        <strong>Datos de ubicación</strong> precisos y potentes herramientas que harán cambiar la forma en que nos localizamos por el mundo.
       </p>
    
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
</section> 

{/* Contenedor TextoImagen Sistemas de Gestión e Integración */}
<section className="contenedortextoimagenSGI">
  <div className=".container-fluid contenedorinterno"> 
    <div className="row">

      <div className="col-md-6 cSGItexto">

        <h2>Sistemas de Gestión e Integración  </h2>
        
        <h3>Tableros de Control</h3>
        <p>Representa, manipula y visualiza datos geoespaciales en manera interactiva</p>

        <h3>Geoportales</h3>
        <p>Descube, visualiza y acceder a información geoespacial  de manera ágil gracias a la organización que ofrecen</p>

      </div>


      <div className="col-md-6 cSGIimagen">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={textoimagenint1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={textoimagenint2} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={textoimagenint3} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Contenedor TextoImagen Mobile Mapping */}
<section class="contenedortextoimagenMM">
  <div class=".container-fluid contenedorinterno"> 
    <div class="row">

      <div class="col-md-6 cMMimagen">
        <img src={appmobil1} class="img-fluid" alt=""/>
      </div>


      <div class="col-md-6 cMMtexto">

        <h2>Mobile Mapping </h2>
        
        <h3>Aplicaciones para levantamiento en campo</h3>
        <p>Agiliza tus levantamientos mediante la integración de información en una sola aplicación</p>

      </div>

    </div>
  </div>
</section>

{/* Contenedor Imagen Full Plataforma 2 */}
<section class="contenedorfullimagenplataforma2">
  <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-4 font-weight-normal">Maps and Location </h1>
      <p class="lead font-weight-normal">Monitorea el estado de actividades, su rendimiento y activos en tiempo real. Mediante gráficos, mapas y otros elementos visuales. </p>
   
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
</section> 

{/* Contenedor lineas Webamapping y Geoportales */}
<section className="contenedortextoimagenWG">
  <div className=".container-fluid contenedorinterno"> 
    <div className="row">

      <div className="col-md-6 cWGtexto">

        <h2>Web Mapping</h2>
        
        <h3>Visores WEB</h3>
        <p>Representa información geoespacial de manera didáctica online</p>

        <h3>Mapas Digitales</h3>
        <p>Representa información geoespacial de manera didáctica online</p>

      </div>


      <div className="col-md-6 cWGimagen">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={visorweb1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={visorweb2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={visorweb3} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={visorweb4} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Contenedor TextoImagen Bases de Datos */}
<section className="contenedortextoimagenDB">
  <div className=".container-fluid contenedorinterno"> 
    <div className="row">

      <div className="col-md-6 cDBimagen">
        <img src={basededatos} className="img-fluid" alt="" />
      </div>


      <div className="col-md-6 cDBtexto">

        <img src={gestion}  className="img-fluid" alt="Mapa Digital" />
        
        <h2>Bases de Datos Geoespaciales</h2>

        <h3>Normativa Mexicana</h3>

        <ul>
          <li><i className="far fa-check-circle"></i> Actualización de DB geoespaciales</li>
          <li><i className="far fa-check-circle"></i> Creación de bases de datos geograáficas</li>
          <li><i className="far fa-check-circle"></i> Soporte de DB geoespaciales</li>
          <li> Entre otras más soluciones</li>
          </ul>

      </div>

    </div>
  </div>
</section>

{/* Contenedor TextoImagen Desarrollo */}
<section className="contenedortextoimagenDesarrollo">
  <div className=".container-fluid contenedorinterno"> 
    <div className="row">

      <div className="col-md-6 cDesarrollotexto">

        <h2>Desarrollo </h2>

        <ul>
          <li><i className="far fa-check-circle"></i> Creación de scripts en PyQGIS para soluciones particulares</li>
          <li> Entre otras más soluciones</li>
          </ul>

      </div>

      <div class="col-md-6 cDesarrolloimagen">
        <img src={desarrollo} className="img-fluid" alt="" />
      </div>




    </div>
  </div>
</section>


{/* Tecnologias */}
<section className="lideresinustriaplataformas">
  <div className="container">
    <div className="row align-items-center justify-content-center  ">
      <h2>Tecnologías con las que trabajamos</h2>
    </div>

    <div className="row align-items-center justify-content-center">

      <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
  
        <div>
          <img src={python} className="img-fluid" alt="QGIS" /> 
           </div>
      </div>

      <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
   
        <div>
          <img src={qgis} className="img-fluid" alt="QGIS" /> 
           </div>
      </div>

      <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">

        <div>
          <img src={js} className="img-fluid" alt="javascript" /> 
           </div>
      </div>

      <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">

        <div>
          <img src={leaflet} className="img-fluid" alt="leaflet" /> 
           </div>
      </div>

      <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">

        <div>
          <img src={postgresql} className="img-fluid" alt="postgresqsl" /> 
           </div>
      </div>

  </div> 
  </div> 

</section>



<Footer />
    </div>
  )
}

