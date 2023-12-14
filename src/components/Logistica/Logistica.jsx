import React from 'react'
import './Logistica.css'
import { Footer } from '../Footer/Footer'
import notalogistica1 from '../../images/logistica/notalogistica1.png';
import notalogistica2 from '../../images/logistica/notalogistica2.jpg';
import notalogistica3 from '../../images/logistica/notalogistica3.jpg';
import notalogistica4 from '../../images/logistica/notalogistica4.jpg';
import logisticacard0 from '../../images/logistica/logisticacard0.svg';
import logisticacard1 from '../../images/logistica/logisticacard1.png';
import logisticacard2 from '../../images/logistica/logisticacard2.png';


export const Logistica = () => {
  return (
    <div>

{/* Portada Logistica */}
<section className="portadalogistica">

  <div className="container-fluid portadalog">
    <div className="row">
      <div className="col-md-12  col-sm-12  col-xs-12 text-center">
        <h1>Logística</h1>
      </div>
    </div>
  </div>
  
</section> 

{/* Notas Logistica */}
<div className="container notaslogistica">
  <div className="row">
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notalogistica1} alt="" />
      <h2>Disminución de Costos</h2>
      <p>Encuentra el mejor trayecto.</p>
    </div>
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notalogistica2} alt="" />
      <h2>Eficiencia en Tiempo</h2>
      <p>Conoces en qué están invertidos tus recursos.</p>
    </div>
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notalogistica3} alt="" />
      <h2>Modelo de Rutas</h2>
      <p>Conoces en qué están invertidos tus recursos.</p>
    </div>    
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notalogistica4} alt="" />
      <h2>Seguimiento</h2>
      <p>Conoces en qué están invertidos tus recursos.</p>
    </div>
  </div>
</div> 

{/* Contenedor TextoImagen Logistica 0 */} 
<section className="contenedortextoimagenlog0">
  <div className=".container-fluid contenedorinterno"> 
    <div className="row">


      <div className="col-md-6 clog0texto">

        <h2>Los datos geoespaciales permiten crear las mejores rutas en la ciudad </h2>
        <p>Los datos geoespaciales permiten optimizar las rutas  para una mejor experiencia  y rentabilidad        </p>

      </div>

      <div className="col-md-6 clog0imagen">
        <img src={logisticacard0} class="img-fluid" alt="" />
      </div>

    </div>
  </div>
</section>

{/* Contenedor TextoImagen Logistica 1 */}
<section className="contenedortextoimagenlog1">
  <div className=".container-fluid contenedorinterno"> 
    <div className="row">

      <div className="col-md-6 clog1imagen">
        <img src={logisticacard1} class="img-fluid" alt="" />
      </div>


      <div className="col-md-6 clog1texto">

        <h2>Optimización de Rutas y Ubicaciones   </h2>
        <p>Identifica las mejores rutas de desplazamiento para conectar dos puntos o más.  Tomando en cuenta datos de distancia, información vial y tiempo.</p>


        <h3>Optimizar rutas de distribución</h3>

        <ul>
          <li><i className="far fa-check-circle"></i>  Conoce la  manera mas eficiente de realizar los repartos cotidianos.  </li>
        </ul>


        <h3>Planificación de rutas con varios puntos de destino</h3>

        <ul>
          <li><i className="far fa-check-circle"></i>  Mejora los tiempo de entrega y por lo tanto el ahorro de insumos.  </li>
        </ul>

        <h3>Rutas optimas en tiempo real </h3>

        <ul>
          <li><i className="far fa-check-circle"></i>  Actualiza tus rutas de reparto dependiendo de información vial.  </li>
        </ul>

      </div>

    </div>
  </div>
</section>

{/* Contenedor TextoImagen Logistica 2 */}  
<section className="contenedortextoimagenlog2">
  <div className=".container-fluid contenedorinterno"> 
    <div className="row">

      <div className="col-md-6 clog2texto">

        <h3>Mapas de Distancias</h3>

        <ul>
          <li><i className="far fa-check-circle"></i>  Identifica cuales las áreas  de un punto a otro que tienen la misma distancia.  </li>
        </ul>


        <h3>Mapas de Tiempo</h3>

        <ul>
          <li><i className="far fa-check-circle"></i>Identifica cuales las áreas  de un punto a otro que tienen el mismo tiempo.  </li>
        </ul>

        <h3>Áreas de Influencia</h3>

        <ul>
          <li><i className="far fa-check-circle"></i>      Conoce las  áreas de influencia de un centro de reparto dependiendo de distancia de viaje y tiempo. </li>
        </ul>
        
      </div>
 

      <div className="col-md-6 clog2imagen">

          <img src={logisticacard2} class="img-fluid" alt="Atlas de Riesgo" />

      </div>

    </div>
  </div>
</section>



<Footer />
    </div>
  )
}
