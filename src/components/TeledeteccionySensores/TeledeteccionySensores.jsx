import React from 'react';
import './TeledeteccionySensores.css';
import { Footer } from '../Footer/Footer';
import textoimagenremoto1 from '../../images/remoto/percepcionremota.png';
import notatele1 from '../../images/remoto/notagobierno1.jpg';
import notatele2 from '../../images/remoto/notapixel.png';
import notatele3 from '../../images/remoto/notaimginfo.png';
import notatele4 from '../../images/remoto/notavoldatos.png';
import cartatele1 from '../../images/remoto/aplicacionsatelitesagro.png';
import cartatele2 from '../../images/remoto/aplicacionsatelitesdesastres.jpg';
import cartatele3 from '../../images/remoto/aplicacionsateliteinfra1.png';
import cartatele4 from '../../images/remoto/aplicacionsatelitescatastro.png';
import cartatele5 from '../../images/remoto/aplicacionsatelitesforestal.png';
import cartatele6 from '../../images/remoto/aplicacionsatelitemina.png';
import cartatele7 from '../../images/remoto/aplicacionsatelitescatastro.jpg';
import cartatele8 from '../../images/remoto/aplicacionsatelitesDEM.jpg';
import cartatele9 from '../../images/remoto/aplicacionsateliteclima.png';
import textoimagentele1 from '../../images/remoto/imagensatelite1.png';
import notaradar1 from '../../images/remoto/notaradar1.png';
import notaradar2 from '../../images/remoto/notaradar2.png';
import notaradar3 from '../../images/remoto/notaradar3.png';
import imgoptica from '../../images/remoto/imagenopticamanilla.png';
import imgradar from '../../images/remoto/imagenradarmanilla.jpg';
import notadrone1 from '../../images/remoto/notadrone1.png';
import notadrone2 from '../../images/remoto/notadrone2.png';
import notadrone3 from '../../images/remoto/notadrone3.png';
import notadrone4 from '../../images/remoto/notadrone4.png';
import textoimagendron1 from '../../images/remoto/dronesimagen1.png';
import aplicaciondron1 from '../../images/remoto/aplicaciondrone_1-01.png';
import aplicaciondron2 from '../../images/remoto/aplicaciondrone_2-01.png';
import aplicaciondron3 from '../../images/remoto/aplicaciondrone_3-01.png';
import aplicaciondron4 from '../../images/remoto/aplicaciondrone_4-01.png';




export const TeledeteccionySensores = () => {
  return (
    <div>

{/* Portada Remoto */}
<section className="portada">

  <div className="container-fluid portadaremoto">
    <div className="row">
      <div className="col-md-6  col-sm-12  col-xs-12 text-center">
        <h1>Teledetección y Sensores Remotos</h1>
      </div>
    </div>
  </div>
  
</section>

{/* Contenedor TextoImagen Remoto */}
<section className="contenedortextoimagenRemo">
  <div className=".container-fluid contenedorinterno"> 
    <div className="row">

      <div className="col-md-6 cRemotexto">

        <h2>Datos Geoespaciales de Manera Remota</h2>

        <p>En geocartos facilitamos la extracción de datos geoespaciales mediante el uso de percepción remota como tecnología de vanguardia para recolectar, procesar e interpretar información que ocurren en la superficie terrestre, sin establecer contacto físico con éstos. </p>

      </div>

      <div className="col-md-6 cRemoimagen">
        <img src={textoimagenremoto1} class="img-fluid" alt="" />
      </div>

    </div>
  </div>
</section>


{/* Contenedor Imagen Full Teledeteccion */}
<section className="contenedorfullimagentele1">
  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 font-weight-normal">Space Made Easy</h1>
      <p className="lead font-weight-normal">En Geocartos® ofrecemos amplia experiencia en obtención y análisis de información 
        mediante UAV e imágenes de satélite de alta resolución.   Para la obtención ágil de información con un proceso 100% digital </p>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
</section> 

{/* Notas Teledeteccion */}
<div className="container notasteledeteccion">
  <div className="row">
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notatele1} alt="" />
      <h4>Inteligencia Visible</h4>
      <p>Diferentes sensores permiten visualizar información que a nuestros ojos seria imposible </p>
    </div>
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notatele2} alt="" />
      <h4>Percibir lo Imperceptible </h4>
      <p>Las imágenes de satélite ofrecen una clara evidencia visual y nuevas perspectivas </p>
    </div>
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notatele3} alt="" />
      <h4> Imágenes son Información</h4>
      <p>
        Gracias a la naturaleza de la imagen, permite obtener datos y analizarlos de una manera eficiente    </p>
    </div>   
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notatele4} alt="" />
      <h4>Volúmenes de Datos</h4>
      <p>Lla obtención de información mediante imágenes ha tenido un crecimiento expoencial, al grado de ser Bid Data</p>
    </div>
  </div>
</div> 

{/* Contenedor Cartas Teledeteccion */}
<section className="cartasteledeteccion">
  <div className="container ">
    <div className="row">


      <div className="col-md-12 col-sm-12 col-xs-12 ">     
         <h2>La tecnologia satelital nos permite dar soluciones a diferentes problematicas</h2>
      </div>
      

      <div className="col-md-4  col-sm-6  col-xs-12 text-center">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">

            <div className="carousel-item active">
              <div className="card shadow-sm  mb-5 bg-white rounded">
                <img className="card-img-top " src={cartatele1} alt=" " />
                <div className="card-body">
                  <h5 className="card-title">Agricultura</h5>
                  <p className="card-text">Analizar la producción en cualquier ubicación, ayuda a los agricultores a realizar un seguimiento de sus resultados y proporciona información del acondicionador del suelo para el año siguiente.</p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="card shadow-sm  mb-5 bg-white rounded">
                <img className="card-img-top " src={cartatele2} alt=" " />
                <div className="card-body">
                  <h5 className="card-title">Desastres Naturales</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="card shadow-sm  mb-5 bg-white rounded">
                <img className="card-img-top"  src={cartatele3} alt=" " />
                <div className="card-body">
                  <h5 className="card-title">Infraestructura</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>

          </div>
        </div> 
      </div>

      <div class="col-md-4  col-sm-6  col-xs-12 text-center">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">

            <div class="carousel-item active">
              <div class="card shadow-sm  mb-5 bg-white rounded">
                <img class="card-img-top"  src={cartatele4} alt=" " />
                <div class="card-body">
                  <h5 class="card-title">Gobierno</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="card shadow-sm  mb-5 bg-white rounded">
                <img class="card-img-top"  src={cartatele5} alt="" />
                <div class="card-body">
                  <h5 class="card-title">Forestal</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="card shadow-sm  mb-5 bg-white rounded">
                <img class="card-img-top"  src={cartatele6} alt=" " />
                <div class="card-body">
                  <h5 class="card-title">Minería</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>

          </div>
        </div> 
      </div>
      
      <div class="col-md-4  col-sm-6  col-xs-12 text-center">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="card shadow-sm  mb-5 bg-white rounded">
                <img class="card-img-top"  src={cartatele7} alt=" " />
                <div class="card-body">
                  <h5 class="card-title">Catastro</h5>
                  <p class="card-text">Actualización del catastro de los proyectos urbanísticos .</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card shadow-sm  mb-5 bg-white rounded">
                <img class="card-img-top"  src={cartatele8} alt=" " />
                <div class="card-body">
                  <h5 class="card-title">Infraestructura</h5>
                  <p class="card-text">Análisis del terreno mediante el uso de modelos digitales del terreno.</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card shadow-sm  mb-5 bg-white rounded">
                <img class="card-img-top"  src={cartatele9} alt=" " />
                <div class="card-body">
                  <h5 class="card-title">Clima</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  

    </div>
  </div>
</section>


{/* Contenedor TextoImagen Teledeteccion */}
<section className="contenedortextoimagenTele">
  <div className=".container-fluid contenedorinterno"> 
    <div className="row">

      <div className="col-md-6 cTeletexto">

        <h2>En la siguiente generación de soluciones geoespaciales</h2>

        <p> Proporcionamos soluciones mediante el acceso a constelación satelitales tanto públicas como privadas, adaptamos el proyecto para ofrecer la mejor solución y así hacer la mejor toma de decisiones de una manera precisa y dinámica. </p>

      </div>

      <div className="col-md-6 cTeleimagen">
        <img src={textoimagentele1} className="img-fluid" alt="" />
      </div>

    </div>
  </div>
</section>

{/* Contenedor Cartitas Satelites */}
<section classNama="cartitassatelital">

  <div className="card-columns contenedorcartitas">
    <div className="card text-center shadow p-3 mb-5 bg-white rounded">
      <div className="card-body"> 
        <h5 className="card-title">Monitoreo Constante</h5>
        <p className="card-text">Supervisa los avances con alta resolución de imagen</p>
      </div>
    </div>
    <div className="card text-center shadow p-3 mb-5 bg-white rounded">
      <div className="card-body">
        <h5 className="card-title">Procesamiento de Imagen</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
    <div className="card text-center shadow p-3 mb-5 bg-white rounded">
      <div className="card-body">
        <h5 className="card-title">Análisis de Bandas Espectrales</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>

  <div className="card-columns contenedorcartitas">
    <div className="card text-center shadow p-3 mb-5 bg-white rounded">
      <div className="card-body"> 
        <h5 className="card-title">Compensación Atmosférica</h5>
        <p className="card-text">Supervisa los avances con alta resolución de imagen</p>
      </div>
    </div>
    <div className="card text-center shadow p-3 mb-5 bg-white rounded">
      <div className="card-body">
        <h5 className="card-title">Imágenes en Alta Resolución</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
    <div className="card text-center shadow p-3 mb-5 bg-white rounded">
      <div className="card-body">
        <h5 className="card-title">Compensación de Bandas </h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>

</section>

{/* Contenedor Imagen Full Radar */}
<section className="contenedorfullimagenradar">
  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 font-weight-normal">See What is Possible</h1>
      <p className="lead font-weight-normal"> Geocartos® somos pioneros en el manejo de tecnologia de imagenes de radar</p>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>


<div className="container ">
  <div className="row">
    <div className="col-md-4  col-sm-6 text-center">
      <img src={notaradar1} className="img-fluid" alt="" />
      <h4>Digitalización</h4>
      <p>24/7 Monitoreo sin importar el clima</p>
    </div>
    <div className="col-md-4 col-sm-6 text-center">
      <img src={notaradar2} className="img-fluid" alt="" />
      <h4>Supervición</h4>
      <p>Acceso a imágenes precisas de alta resolución </p>
    </div>
    <div className="col-md-4 col-sm-6 text-center">
      <img src={notaradar3} className="img-fluid" alt="" />
      <h4>Agilización</h4>
      <p>Plazo de recurrencia orbital constante </p>
    </div>  
  </div>
</div>
  </div>
  
</section> 


{/* Contenedor TextoImagen Radar */} 
<section className="contenedortextoimagenRadar">
  <div className=".container-fluid contenedorinterno"> 
    <div className="row">

      <div className="col-md-6 cRadarimagen">
        <div className="img-comp-container">
          <div className="img-comp-img">
            <img src={imgoptica} width="550" height="400"  alt=''/>
          </div>
          <div className="img-comp-img img-comp-overlay">
            <img src={imgradar} width="550" height="400"  alt='' />
          </div>
        </div>
       </div>

      <div className="col-md-6 cRadartexto">

        <h2>En la siguiente generación de soluciones geoespaciales</h2>

        <p>Las imágenes modernas se capturan desde una amplia gama de altitudes que van desde el nivel del suelo a más de 22.000 millas sobre la Tierra. Proporcionamos soluciones mediante constelaciones satelitales con acceso público y privado, así como con monitoreo diario, imágenes de alta resolución, entre otras novedades tecnológicas. </p>

      </div>

    </div>
  </div>
</section>

{/* Contenedor Cartitas Radar */} 
<section class="cartitasradar">

  <div class="card-columns contenedorcartitas">
    <div class="card text-center shadow p-3 mb-5 bg-white rounded">
      <div class="card-body"> 
        <h5 class="card-title">Mapas de Inundación</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
    <div class="card text-center shadow p-3 mb-5 bg-white rounded">
      <div class="card-body">
        <h5 class="card-title">Monitoreo de Desplazamineto del Terreno</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
    <div class="card text-center shadow p-3 mb-5 bg-white rounded">
      <div class="card-body">
        <h5 class="card-title">Seguimiento de Obra</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>

  <div class="card-columns contenedorcartitas">
    <div class="card text-center shadow p-3 mb-5 bg-white rounded">
      <div class="card-body"> 
        <h5 class="card-title">Análisis de amplitud y Series de tiempo</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
    <div class="card text-center shadow p-3 mb-5 bg-white rounded">
      <div class="card-body">
        <h5 class="card-title">Detección de derrames de petróleo</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
    <div class="card text-center shadow p-3 mb-5 bg-white rounded">
      <div class="card-body">
        <h5 class="card-title">Seguimiento de incencios forestales</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>

</section>

{/* Contenedor Imagen Full Drone */} 
<section className="contenedorfullimagenDrone">
  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 font-weight-normal">Measure From Images</h1>
      <p className="lead font-weight-normal">Pioneros en la implementación de tecnología drones para dar respuesta a diferentes problemáticas, contamos con equipo UAV´s  de última generación para el monitoreo y acceso a zonas complejas. </p>

    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block">

    </div>
  </div>
  
</section> 


{/* Notas Drone */} 
<div className="container notasdrone">
  <div className="row">
    <div className="col-md-3  col-sm-6  col-xs-12 text-center" >
      <img src={notadrone1} alt="" />
      <h4>Digitalización</h4>
      <p>Integramos tus proyectos a una era digital y geoespacial.</p>
    </div>
    <div class="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notadrone2} alt="" />
      <h4>Supervición</h4>
      <p>Monitorea cambios sobre el terreno o avances de proyectos a través del tiempo, para la mejor toma de decisión. </p>
    </div>
    <div class="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notadrone3} alt="" />
      <h4>Agilización</h4>
      <p>Ahorra tiempo en obtención de información mediante el procesamiento y análisis de datos geoespaciales. </p>
    </div>    
    <div class="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notadrone4} alt="" />
      <h4>Recolección de Datos</h4>
      <p>Agiliza la adquisición de datos geoespaciales, especialmente en zonas remotas o de difícil acceso.</p>
    </div>
  </div>
</div>

{/* Contenedor TextoImagen Drone 1 */} 
<section className="contenedortextoimagenDrone1">
  <div className=".container-fluid contenedorinterno"> 
    <div className="row">

      <div className="col-md-6 cDrone1imagen">

        <img src={textoimagendron1} class="img-fluid" alt="Atlas de Riesgo" />
    
      </div>

      <div className="col-md-6 cDrone1texto">

        <h2>Especialistas en Soluciones Geoespaciales con equipos aeros no tripulados</h2>
     
        <p>Uso de tecnologías  través de captura de datos geoespaciales y sistemas de información geográfica, brindamos respuestas en proyectos de topografía, cartografía, catastro e incluso minería a cielo abierto, esto para la toma de decisiones en el ordenamiento territorial.</p>

      </div>

    </div>
  </div>
</section>

{/* Contenedor TextoImagen Drone 2 */} 
<section className="contenedortextoimagenDrone2">
  <div className=".container-fluid contenedorinterno"> 
    <div className="row">

      <div className="col-md-6 cDrone2texto">

        <h3>Algunas de nuestras soluciones:</h3>

        <ul>
          <li><i className="far fa-check-circle"></i>  Levantamientos fotogramétricos.</li>
          <li><i className="far fa-check-circle"></i>  Ortofotos.</li>
          <li><i className="far fa-check-circle"></i>  Seguimineto de obra.</li>
          <li><i className="far fa-check-circle"></i>  Nubes de puntos.</li>
          <li><i className="far fa-check-circle"></i>  DEM(Modelo Digital de Elevación), DTM(Modelo Digital del Terreno), DSM(Modelos Digital de Superficie).</li>
        </ul>

      </div>

      <div className="col-md-6 cDrone2imagen">

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={aplicaciondron1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={aplicaciondron2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={aplicaciondron3} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={aplicaciondron4} alt="Third slide" />
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


<Footer />
    </div>
  )
}
