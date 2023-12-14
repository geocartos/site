import React from 'react'
import './Home.css'
import { Footer } from '../Footer/Footer'
import portada1 from '../../images/portadabienvenida1.png'
import portada2 from '../../images/portadabienvenida2.png'
import portada3 from '../../images/portadabienvenida3.png'
import sectoring from '../../images/construccion.png'
import sectorgobysoc from '../../images/gobierno.png'
import sectorlog from '../../images/logistica.png'
import sectornatural from '../../images/ambiente.png'
import sectornegocios from '../../images/negocios.png'
import sectorcapa from '../../images/capacitacion.png'
import somosgeocartos from '../../images/somosgeocartos.png'
import valor1 from '../../images/valor1.png'
import valor2 from '../../images/valor2.png'
import valor3 from '../../images/valor3.png'
import valor4 from '../../images/valor4.png'
import valor5 from '../../images/valor5.png'
import valor6 from '../../images/valor6.png'

import solucionanalisis from '../../images/solucionanalisisdatosgeograficos.png'
import solucionevaluacion from '../../images/evaluaciongeoespacial.png'
import soluciondatos from '../../images/representaciondatosmapas.png'
import solucionadesarrollo from '../../images/desarrollodeaplicacionesgeograficas.png'
import qgis from '../../images/qgis.png'
import esri from '../../images/esri.png'
import hexagon from '../../images/hexagon.png'
import carto from '../../images/carto.png'
import google from '../../images/google.png'


import { NavLink } from 'react-router-dom'


export const Home = () => {
  return (
    <div>

 {/* Carousel */}      
<section className='carouselportada'>
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>

  <div className="carousel-inner">
    
    <div className="carousel-item active">
      <img className="d-block w-100" src={portada1} alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
    <h5>Especialistas en manejo  de geotecnologías</h5>
  </div>
    </div>

    <div className="carousel-item">
  <img className='d-block  w-100' src={portada2} alt="..." />
  <div className="carousel-caption d-none d-md-block">
    <h5>Creando valor mediante ubicación  de información</h5>
  </div>
</div>


    <div className="carousel-item">
  <img className='d-block  w-100' src={portada3} alt="..." />
  <div className="carousel-caption d-none d-md-block">
    <h5>Toma decisiones con datos geoespaciales</h5>
  </div>
</div>

  </div>


  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</section>


{/* Sectores */}
<div className="container sectores">

  <div className="row sectortitulo">
    <div className="col-md-12 col-sm-12 col-xs-12 ">     
      <h3>SOLUCIONES PARA:</h3>
    </div>
  </div>

  <div className="row sectoresfila">
    <div className="col-md-4 col-sm-6 col-xs-12 sectores text-center ">
      <img className="sectoresicono" src={sectoring} alt="" />
      <h4 className="sectoresgeotos"><NavLink to="/IngenieriayConstruccion">Infraestructura</NavLink></h4> 
    </div>

    <div className="col-md-4 col-sm-6 col-xs-12 sectores text-center ">
      <img className="sectoresicono" src={sectorgobysoc} alt="" />
      <h4 className="sectoresgeotos"><NavLink to="/GobiernoySociedad">Gobierno y Sociedad</NavLink></h4>
    </div>

    <div className="col-md-4 col-sm-6 col-xs-12 sectores text-center ">
      <img className="sectoresicono" src={sectorlog} alt="" />
      <h4 className="sectoresgeotos"> <NavLink to="/Logistica">Logística</NavLink> </h4>
    </div>

    <div className="col-md-4 col-sm-6 col-xs-12 sectores text-center ">
      <img className="sectoresicono" src={sectornatural} alt="" />
      <h4 className="ssectoresgeotos"> <NavLink to="/RecursosnaturalesyMedioambiente">Recursos Naturales y Ambiente</NavLink> </h4>
    </div>

    <div className="col-md-4 col-sm-6 col-xs-12 sectores text-center ">
      <img className="sectoresicono" src={sectornegocios} alt="" />
      <h4 className="sectoresgeotos"> <NavLink to="/MarketingyNegocios">Marketing y Negocios</NavLink> </h4>
    </div>

    <div className="col-md-4 col-sm-6 col-xs-12 sectores text-center ">
      <img className="sectoresicono" src={sectorcapa} alt="" />
      <h4 className="sectoresgeotos"> <NavLink to="/Capacitacion">Capacitación</NavLink> </h4>
    </div>

  </div>



 


</div>


{/* Geocartos Somos */}
<section className="contenedortextoimagenTyping">
<div className=".container-fluid contenedorinterno"> 
    <div className="row">

      <div className="col-md-6 ctypeingtexto">

        <div className="col-md-12 col-sm-12 col-xs-12">
          <h4>Geocartos somos</h4>
          <p><span className="typed-text"></span><span class="cursor">&nbsp;</span></p>
        </div>
      </div>


      <div className="col-md-6 ctypeingimagen">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <img src={somosgeocartos} className="img-fluid" alt="" />
        </div>
      </div>

    </div>
  </div>
</section>

{/* Que hacemos */}
<section className="quehacemos">
  <div className="container">
    <h3>¿QUÉ HACEMOS?</h3>
    <br/>
    <p>En Geocartos somo un grupo de profesionales que ofrece soluciones mediante la integración y gestión de <strong>sistemas de información geográfica</strong>, que va desde la <strong>recolección, manipulación, interpretación y visualización de datos geoespaciales</strong>.</p>
    <br/>  
    <div className="row clearfix">      
            <div className="col-md-4 col-sm-8 col-xs-8  ">
              <div className="solucion">
                <h2>Monitoreo de cambios</h2> 
              </div>
            </div>

            <div className="image-column col-md-2 col-sm-4  col-xs-4 ">
              <div className="solucion">
                  <img src={valor1} class="img-fluid" alt="Soluciones de datos con Drones" />
              </div>
            </div>

            <div className="image-column col-md-2 col-sm-4  col-xs-4  ">
              <div className="solucion">
                  <img src={valor2} class="img-fluid" alt="Soluciones de datos con Drones" />
              </div>
            </div>

            <div className="col-md-4 col-sm-8 col-xs-8   ">
              <div className="solucion">
                <h2>Planificación y toma de decisiones</h2> 
              </div>
            </div>          
        </div>

        <div className="row clearfix">      
          <div className="col-md-4 col-sm-8 col-xs-8   ">
            <div className="solucion">
            <h2>Detección  de patrones y comportamiento</h2>  
            </div>
          </div>

          <div className="image-column col-md-2 col-sm-4  col-xs-4  ">
            <div className="solucion">
                <img src={valor3} class="img-fluid" alt="Soluciones de datos con Drones" />
            </div>
          </div>

          <div className="image-column col-md-2 col-sm-4  col-xs-4  ">
            <div className="solucion">
                <img src={valor4} class="img-fluid" alt="Soluciones de datos con Drones" />
            </div>
          </div>

          <div className="col-md-4 col-sm-8 col-xs-8   ">
            <div className="solucion">
              <h2>Mejora de gestión y respuesta</h2>
            </div>
          </div>          
      </div>

      <div className="row clearfix">      
        <div className="col-md-4 col-sm-8 col-xs-8   ">
          <div className="solucion">
            <h2>Extracción, análisis y representación geográfica</h2>
          </div>
        </div>

        <div className="image-column col-md-2 col-sm-4  col-xs-4  ">
          <div className="solucion">
              <img src={valor5} class="img-fluid" alt="Soluciones de datos con Drones" />
          </div>
        </div>

        <div className="image-column col-md-2 col-sm-4  col-xs-4 ">
          <div className="solucion">
              <img src={valor6} class="img-fluid" alt="Soluciones de datos con Drones" />
          </div>
        </div>

        <div className="col-md-4 col-sm-8 col-xs-8   ">
          <div className="solucion">
            <h2>Optimización de recursos</h2>   
          </div>
        </div>          
    </div>
    </div>
</section> 

{/* Contador */}
<section className="contador">
  <div className="container counter-section">
    <div className="row text-center">
      <div className="col-md-3 col-sm-6 col-xs-12  counter-box">
        <div className="icon-box"><i className="fa fa-briefcase"></i></div>   
        <p className="superior">Más de </p>
        <p className="counter">30</p>
        <p className="inferior">Proyectos Realizados</p>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12  counter-box">
        <div className="icon-box"><i className="fa fa-database"></i></div>
        <p className="superior">Más de </p>
        <p className="counter">1500</p>
        <p className="inferior">Tb de información procesada</p>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12 counter-box">
        <div className="icon-box"><i className="fa fa-chart-area"></i></div>
        <p className="superior">Más de </p>
        <p className="counter">6000</p>
        <p className="inferior">Datos Analizados y Ubicados</p>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12 counter-box">
        <div className="icon-box"><i className="fa fa-trophy"></i></div>
        <p className="superior">Más de </p>
        <p className="counter">10</p>
        <p className="inferior">Años de Experiencia Acumulada</p>
      </div>
    </div>
  </div>

</section>


{/* Nuestras Soluciones */}

<section className="nuestrasolucion">
  <div className="container">
    <h3>¿EN QUÉ BASAMOS NUESTRAS SOLUCIONES?</h3>
      <div className="row clearfix">
          
            <div className="image-column col-md-3 col-sm-6 col-xs-12 ">
              <div className="solucion">
                  <img src={solucionanalisis} className="img-fluid" alt="análisis de datos geográficos" />
                  <h2>Datos</h2>
                  <p>Obtenemos y representamos <strong> datos geoespaciales</strong> de acuerdo a las necesidades. </p> 
                 </div>
            </div>
            <div className="image-column col-md-3 col-sm-6 col-xs-12  ">
              <div className="solucion">
                  <img src={solucionevaluacion} className="img-fluid" alt="Evaluación de información geográfica geoespacial" />
                  <h2>Análisis</h2>
                 <p>Analizamos los datos para ayudar en la toma de decisiones desde una perspectiva <strong>geoespacial</strong>. </p> 
                </div>
            </div>
            <div className="image-column col-md-3 col-sm-6 col-xs-12  ">
              <div className="solucion">
                  <img src={soluciondatos} className="img-fluid" alt="Representación datos geoespaciales mapas" />
                  <h2>Representación</h2>
                 <p>A través de <strong>cartografía</strong>  que permite ubicar dónde y cómo se desarrollan los datos en cuestión. </p> 
                </div>
            </div>
            <div className="image-column col-md-3 col-sm-6 col-xs-12  ">
              <div className="solucion">
                  <img src={solucionadesarrollo} className="img-fluid" alt="Desarrollo de aplicaciones WEB y mobiles SIG" />
                  <h2>Plataformas</h2>
                 <p>Para que el usuario pueda disponer de su <strong>información geográfica</strong> en cualquier momento y lugar         </p>
                </div>
            </div>

        </div>
        
    </div>
</section> 


{/* Alianzas */}
<section className="lideresinustria">
  <div className="container">

    <div className="row align-items-center justify-content-center  ">
      <h2>Apoyándonos con la tecnología de los líderes de la industria</h2>
    </div>
    
    <div className="row align-items-center justify-content-center">

      <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
     
        <div>
          <img src={qgis} className="img-fluid" alt="QGIS"/> 
           </div>
      </div>

      <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
    
        <div>
          <img src={esri} className="img-fluid" alt="arcgis" /> 
           </div>
      </div>

      <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
 
        <div>
          <img src={carto} class="img-fluid" alt="CARTO"/> 
           </div>
      </div>

      <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
       
        <div>
          <img src={hexagon} class="img-fluid" alt="HEXAGON" /> 
           </div>
      </div>

      <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
  
        <div>
          <img src={google} className="img-fluid" alt="QGIS" /> 
           </div>
      </div>

  </div> 
 </div> 
</section>




       <Footer />


    </div>
  )
}
