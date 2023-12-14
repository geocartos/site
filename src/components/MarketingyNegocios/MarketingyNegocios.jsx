import React from 'react';
import { Footer } from '../Footer/Footer';
import './MarketingyNegocios.css';
import notanegocios1 from '../../images/negocios/optimizacion.png';
import notanegocios2 from '../../images/negocios/decision.png';
import notanegocios3 from '../../images/negocios/segmentacion.png';
import notanegocios4 from '../../images/negocios/patrones.png';
import geomarketing1 from '../../images/negocios/geomarketing1.png';
import geomarketing2 from '../../images/negocios/geomarketing2.png';
import negocios_card1 from '../../images/negocios/card1.jpg';
import negocios_card2 from '../../images/negocios/card2.png';
import negocios_card3 from '../../images/negocios/card3.jpg';
import negocios_real from '../../images/negocios/realestate1.png';



export const MarketingyNegocios = () => {
  return (
    <div>

{/* Portada Negocios */}
<section className="portadanegocios">

  <div className="container-fluid portadanego">
    <div className="row">
      <div className="col-md-12  col-sm-12  col-xs-12 text-center">
        <h1>Geomarketing y Negocios</h1>
      </div>
    </div>
  </div>
  
</section>

{/* Notas Negocios */}
<div className="container notasnegocios">
  <div className="row">
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notanegocios1} alt="Optimización de mercado" />
      <h2>Optimización de Territorios </h2>
      <p>Identifica las variables clave del territorio que influyen en los procesos de tu negocio. </p>
    </div>
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notanegocios2} alt="Tomas de Decision" />
      <h2>Toma de Decisión </h2>
      <p>Realiza decisiones con datos demográficos, económicos y de ubicación.  </p>
    </div>   
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notanegocios3} alt="Segmentacion del territorio" />
      <h2>Segmentación de Mercado</h2>
      <p>Identifica las zonas donde tus clientes viven, transitas o visitan con recurrencia.      </p>
    </div> 
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notanegocios4} alt="Identificar Patrones de Mercado" />
      <h2>Patrones Territoriales      </h2>
      <p>Soluciones basadas en metodologías disruptivas con inteligencia de localización..</p>
    </div>
  </div>
</div> 


{/* Contenedor TextoImagen Geomarketing 1 */}
<section className="contenedortextoimagenGeom1">
  <div className=".container-fluid contenedorinterno"> 
    <div className="row">

      <div className="col-md-6 cGeom1texto">


          <h2>Geomarketing</h2>
          <p>La Localización Inteligente te beneficiará en procesos de negocios como generando valor en sus estrategias de marketing, ventas, distribución, expansión y análisis territorial.</p>
  
          <h3>Análisis de concentración de clientes potenciales</h3>
  
          <ul>
            <li><i className="far fa-check-circle"></i>  Ubica a tu segmento en un mapeo inteligente y con análisis geoespacial que impulsarán el incremento.</li>
          </ul>
  
          <h3>Geocodificación de direcciones</h3>
  
          <ul>
             <li><i className="far fa-check-circle"></i>  Convierte tus direcciónes en información geoespacial y agiliza tus procesos.</li>
          </ul>
  
        
      </div>


      <div className="col-md-6 cGeom1imagen">

          <img src={geomarketing1} class="img-fluid" alt="Atlas de Riesgo" />

      </div>

    </div>
  </div>
</section>

{/* Contenedor TextoImagen Geomarketing 2 */}
<section className="contenedortextoimagenGeom2">
  <div className=".container-fluid contenedorinterno"> 
    <div className="row">

      <div className="col-md-6 cGeom2imagen">
        <img src={geomarketing2} class="img-fluid" alt="" />
      </div>


      <div className="col-md-6 cGeom2texto">

        <h3>Planificación de rutas para distribución</h3>

        <ul>
          <li><i className="far fa-check-circle"></i> Encuentrael mejor trayecto entre tu cliente, tiempo y rentabilidad.</li>
        </ul>

        <h3>Big Data en los negocios</h3>

        <ul>
          <li><i className="far fa-check-circle"></i>Contamos y analisamos diferentes fuentes  con una gran cantidad de datos.</li>
        </ul>

          
        <h3>Ubicación para zonas idoneas para apertura de puntos de venta</h3>
  
        <ul>
          <li><i className="far fa-check-circle"></i>  Encuentra la mejor ubicación para la apertura de comercios, tomando encuenta datos territoriales y demográficos.</li>
        </ul>

      </div>

    </div>
  </div>
</section>

{/* Contenedor Cartas Negocios 1 */}
<section className="cartasnegocios">
  <div className="container ">
    <div className="row">
      
<div className="col-md-4  col-sm-6  col-xs-12 ">
  <div className="card shadow-sm  mb-5 bg-white rounded">
    <img className="card-img-top " src={negocios_card1} alt=" " />
    <div className="card-body">
      <h5 className="card-title">Conocer dónde viven, trabajan y compran los clientes</h5>
      <p className="card-text">Mapear y analizar los datos demográficos de los clientes. Tomar decisiones basadas en datos sobre la selección de sitios, marketing y clasificación de productos.</p>
    </div>
  </div>
</div>

<div className="col-md-4  col-sm-6  col-xs-12 ">
  <div className="card shadow-sm mb-5 bg-white rounded">
    <img className="card-img-top " src={negocios_card2} alt=" " />
    <div className="card-body">
      <h5 className="card-title">Entender por qué las compras ocurren donde ocurren</h5>
      <p className="card-text">Los mapas y el análisis espacial fortalecen los inventarios y las decisiones de marketing. Ver cómo y dónde interactúan los clientes con tu marca.</p>
    </div>
  </div>
</div>
 
<div className="col-md-4  col-sm-6  col-xs-12 ">
  <div className="card shadow-sm  mb-5 bg-white rounded">
    <img className="card-img-top" src={negocios_card3} alt=" "  />
    <div className="card-body">
      <h5 className="card-title">Determina  mejor zona para realizar un proyecto</h5>
      <p className="card-text">Predecir los sitios más rentables basándose en presencia competitiva, demografía de clientes potenciales, acceso a cadenas de suministro y más.</p>
    </div>
  </div>
</div>

    </div>
  </div>
</section>

{/* Contenedor Cartas Negocios 1 */}
<section className="contenedortextoimagenReal">
  <div className=".container-fluid contenedorinterno"> 
    <div className="row">

      <div className="col-md-6 cRealtexto">


          <h2>Real Estate</h2>
          <p>El estudio territorial es clave para cualquier desarrollo inmobiliario, conoce la plusvalia dependiendo de la cercanía de comercios o servicios. </p>

          <h3>Desarrollo potencial de mercado</h3>
  
          <ul>
            <li><i className="far fa-check-circle"></i> Comprender dónde están las áreas de crecimiento y oportunidad con análisis espacial.</li>
          </ul>
  
          <h3>Información geoespacial para compra y venta</h3>
  
          <ul>
             <li><i className="far fa-check-circle"></i> Poder organizar el contexto para sus proyectos de sitios.</li>
          </ul>
  
  
          <h3>Entender el contexto territorial</h3>
  
          <ul>
            <li><i className="far fa-check-circle"></i> Revisar los planes de diseño con una perspectiva completa para evaluar el impacto total de los cambios de diseño.</li>
          </ul>
        
      </div>


      <div className="col-md-6 cRealimagen">

          <img src={negocios_real} class="img-fluid" alt="Atlas de Riesgo" />

      </div>

    </div>
  </div>
</section>


<Footer />
    </div>
  )
}
