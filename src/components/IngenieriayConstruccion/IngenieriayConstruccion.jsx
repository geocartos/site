import React from 'react';
import './IngenieriayConstruccion.css';
import { Footer } from '../Footer/Footer';
import notaingenieria1 from '../../images/ingenieria/notaingenieria1.jpg';
import notaingenieria2 from '../../images/ingenieria/notaingenieria2.jpg';
import notaingenieria3 from '../../images/ingenieria/notaingenieria3.jpg';
import notaingenieria4 from '../../images/ingenieria/notaingenieria4.jpg';
import obracivil from '../../images/ingenieria/obracivil1.png';
import ingenieria_carta1 from '../../images/ingenieria/ingenieria_carta1.png';
import ingenieria_carta2 from '../../images/ingenieria/ingenieria_carta2.png';
import ingenieria_carta3 from '../../images/ingenieria/ingenieria_carta3.png';
import ingenieria_carta4 from '../../images/ingenieria/cartaredhidricacuenca.png';
import ingenieria_carta5 from '../../images/ingenieria/cartaimagenesdesatelite.png';
import ingenieria_carta6 from '../../images/ingenieria/cartamodigitalterre.jpg';
import hidro1 from '../../images/ingenieria/hidrico.png';
import telecom from '../../images/ingenieria/telecom.png';

export const IngenieriayConstruccion = () => {
  return (
    <div>


{/* Portada Ingenieria*/}
<section className="portadaingenieria">
  <div className="container-fluid portadainge">
    <div className="row">
      <div className="col-md-12  col-sm-12  col-xs-12 text-center">
        <h1>Infraestructura</h1>
      </div>
    </div>
  </div>
</section>

{/* Notas Ingenieria */}
<div className="container notasingenieria">
  <div className="row">
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notaingenieria1} alt="" />
      <h2>Digitalización</h2>
      <p>Analiza escenarios de forma digital para agilizar tus procesos</p>
    </div>
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notaingenieria2} alt="" />
      <h2>Planeación</h2>
      <p>Evalúa con análisis geoespacial diferentes factores que puedan afectar tus proyectos</p>
    </div>
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notaingenieria3} alt="" />
      <h2>Gestión</h2>
      <p>Sigue avances de proyectos mediante imágenes y plataformas geográficas</p>
    </div>   
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notaingenieria4} alt="" />
      <h2>Decisión</h2>
      <p>Realiza estudios multicriterio mediante información geográfica para tomar las mejores decisiones </p>
    </div>
  </div>
</div> 

{/* Contenedor Imagen Full Ingenieria 1 */}
<section className="contenedorfulligenieria1">
  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
   
      <p className="lead font-weight-normal">En Geocartos® somos pioneros en la implementación de tecnología geoespacial para elaboración de modelado de información de construcción (BIM) </p>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
</section>

{/* Contenedor TextoImagen Construccion */}
<section className="contenedortextoimagenCons">
  <div className=".container-fluid contenedorinterno"> 
    <div classname="row">

      <div className="col-md-6 cConstexto">


          <h2>Obra Civil </h2>
  
          <h3>Monitoreo y gestión</h3>
  
          <ul>
            <li><i className="far fa-check-circle"></i>  Desarrollo de Dashboards para llevar el control de los proyectos de infraestructura.</li>
            <li><i className="far fa-check-circle"></i>  Seguimiento de obra mediante dron e imágenes satelitales ópticas ó radar.</li>
          </ul>
  
          <h3>Cumplimiento de normatividad</h3>
  
          <ul>
            <li><i className="far fa-check-circle"></i>  Apoyo en la elaboración de manifestaciones de impacto ambiental para contrucción.</li>
            <li><i className="far fa-check-circle"></i>  Revisamos si tu proyecto está en áreas protegidas o si puede infrigir normas ambientales.</li>
            
          </ul>
  
  
          <h3>Digitalización de Entornos</h3>
  
          <ul>
            <li><i className="far fa-check-circle"></i>  Gemelos digitales.</li>
            <li><i className="far fa-check-circle"></i>  Fotogrametría y nubes de puntos.</li>
            <li><i className="far fa-check-circle"></i>  Cálculo de volumenes</li>
            <li><i className="far fa-check-circle"></i>  Estabilidad de taludes y cálculo de volumenes.</li>
          </ul>
        
      </div>


      <div className="col-md-6 cConsimagen">

          <img src={obracivil} class="img-fluid" alt="Atlas de Riesgo" />

      </div>

    </div>
  </div>
</section>

{/* Contenedor TextoImagen Hidrologia */}
<section className="contenedortextoimagenHidro">
  <div className=".container-fluid contenedorinterno"> 
    <div className="row">

      <div className="col-md-6 cHidroimagen">
        <img src={hidro1} class="img-fluid" alt="" />
      </div>


      <div className="col-md-6 cHidrotexto">

        <h3>Estudios digitales del terreno</h3>

        <ul>
          <li><i className="far fa-check-circle"></i>  Estabilidad de taludes y cálculo de volumenes.</li>
          <li><i className="far fa-check-circle"></i>  Modelos digitales del terreno.</li>
          <li><i className="far fa-check-circle"></i>  Análisis de hundimiento del terreno al milimetro.</li>
        </ul>

      

        <h3>Análisis Hidrogelógicos</h3>

        <ul>
          <li><i className="far fa-check-circle"></i>  Análisis para zonas de recarga y descarga.</li>
          <li><i className="far fa-check-circle"></i>  Estudios Hidrogelógicos y cuencas.</li>
          <li><i className="far fa-check-circle"></i>  Ubicar zonas de inundación.</li>
          <li><i className="far fa-check-circle"></i>  Identificación para zonas de riesgo.</li>
        </ul>

        <h3>Estudios multicriterio para proyectos de infraestrucutra</h3>

        <ul>
          <li><i className="far fa-check-circle"></i>  Conoce el entorno territorial del proyecto, sus riesgos y afectaciones.</li>
        </ul>
        

      </div>

    </div>
  </div>
</section>

{/* Contenedor Cartas Ingenieria */}
<section className="cartasingenieria">
  <div className="container ">
    <div className="row">
      
<div className="col-md-4  col-sm-6  col-xs-12 ">
  <div className="card shadow-sm  mb-5 bg-white rounded">
    <img className="card-img-top " src={ingenieria_carta1} alt=" " />
    <div className="card-body">
      <h5 className="card-title">Monitoreo para proyectos de infraestructura</h5>
      <p className="card-text">Usar imágenes para el seguimiento de proyecto permite identificar detección de cambios, supervisión de obra de manera remota, periodica y sin importa si está en zonas con nubosidad.</p>
    </div>
  </div>
</div>

<div className="col-md-4  col-sm-6  col-xs-12 ">
  <div className="card shadow-sm mb-5 bg-white rounded">
    <img className="card-img-top " src={ingenieria_carta2} alt=" " />
    <div className="card-body">
      <h5 className="card-title">Represetación digital del proyecto</h5>
      <p className="card-text">El uso de los modelos digitales de elevación con el objeto de representar en forma fidedigna el relieve terrestre o de edificaciones para integración BIM. Tiene un impacto relevante en los resultados finales y en la calidad del producto generado.</p>
    </div>
  </div>
</div>

<div className="col-md-4  col-sm-6  col-xs-12 ">
  <div className="card shadow-sm  mb-5 bg-white rounded">
    <img className="card-img-top" src={ingenieria_carta3} alt=" " />
    <div className="card-body">
      <h5 className="card-title">Actualiza Bases de Datos desde el campo</h5>
      <p className="card-text">Manten actualizado tu inventarios desde una visita a campo, revisa personalmente la infraestructura actual.</p>
    </div>
  </div>
</div>







    </div>
  </div>
</section>

{/* Contenedor Imagen Full Ingenieria 2 */}
<section className="contenedorfulligenieria2">
  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 font-weight-normal">Digitalización en GIS</h1>
      <p className="lead font-weight-normal">En Geocartos® te ayudamos a llevar una gestión del avance de la obra desde los GIS. </p>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
</section>

{/* Contenedor TextoImagen TeleCom */}
<section className="contenedortextoimagenTele">
  <div className=".container-fluid contenedorinterno"> 
    <div className="row">

      <div className="col-md-6 cTeleimagen">
        <img src={telecom} class="img-fluid" alt="" />
      </div>


      <div className="col-md-6 cTeletexto">

        <h2>TeleCom</h2>
        <h3>Estudio geoespacial para ubicar la mejor cobertura de antenas</h3>

        <ul>
          <li><i className="far fa-check-circle"></i>  Obten la mejor rentabilidad de la señal a través de un análisis geoespacial del entorno.</li>
        </ul>

      

        <h3>Digitalización de procesos </h3>

        <ul>
          <li><i className="far fa-check-circle"></i>  Generación de gemelos digitales pera  el mejor análisis.</li>
          <li><i className="far fa-check-circle"></i>  Supervición mediante drone.</li>
        </ul>

      </div>

    </div>
  </div>
</section>

{/* Contenedor Cartas Ingenieria 2 */}
<section className="cartasingenieria">
<div className="container ">
    <div className="row">
      
<div className="col-md-4  col-sm-6  col-xs-12 ">
  <div className="card shadow-sm  mb-5 bg-white rounded">
    <img className="card-img-top " src={ingenieria_carta4} alt=" " />
    <div className="card-body">
      <h5 className="card-title">Conocer el comportamiento de las redes hídricas</h5>
      <p className="card-text">Modelar comportamiento hidrogeológico permite conocer llanuras de inundación para la predicción de los peligros por inundación fluvial y planificar acciones de mitigación.</p>
    </div>
  </div>
</div>

<div className="col-md-4  col-sm-6  col-xs-12 ">
  <div className="card shadow-sm mb-5 bg-white rounded">
    <img className="card-img-top " src={ingenieria_carta5} alt=" " />
    <div className="card-body">
      <h5 className="card-title">Los mapas SIG permiten  una planificación inteligente</h5>
      <p className="card-text">La infraestructura verde es un método para abordar retos climáticos y urbanos construyendo con la naturaleza. Es una forma de ver la tierra que nos rodea con un enfoque más ecológico y holístico.</p>
    </div>
  </div>
</div>

<div className="col-md-4  col-sm-6  col-xs-12 ">
  <div class="card shadow-sm  mb-5 bg-white rounded">
    <img className="card-img-top" src={ingenieria_carta6} alt=" " />
    <div className="card-body">
      <h5 className="card-title">Modelos Digitales de Elevación están cambiando la forma de planificar</h5>
      <p className="card-text">Los DEM  ofrecen una gran cantidad de información, con la que podrás procesar, modelar, crear simulaciones, planificar, conocer el terreno,  entre otras más aplicaciones.</p>
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
