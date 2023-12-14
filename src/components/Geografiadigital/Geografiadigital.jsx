import React from 'react';
import './Geografiadigital.css';
import { Footer } from '../Footer/Footer';
import notadigital1 from '../../images/geografiadigital/notagobierno1.png';
import notadigital2 from '../../images/geografiadigital/notagobierno2.png';
import notadigital3 from '../../images/geografiadigital/notagobierno3.png';
import notadigital4 from '../../images/geografiadigital/notagobierno3.png';
import contenedordigital1 from '../../images/geografiadigital/aplicacion1.png';
import cartadigital1 from '../../images/geografiadigital/universidades.png';
import cartadigital2 from '../../images/geografiadigital/aplicacion8.png';
import cartadigital3 from '../../images/geografiadigital/librerias.png';


export const Geografiadigital = () => {
  return (
    <div>

{/* Portada Geografia */}
<section className="portada">

  <div className="container-fluid portadageografia">
    <div className="row">
      <div className="col-md-6  col-sm-12  col-xs-12 text-center">
        <h1>Geografía Digital</h1>
      </div>
    </div>
  </div>
  
</section>


{/* Notas Geografía */}
<div className="container notasgeografia">
  <div className="row">
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notadigital1}  class="img-fluid" alt="" />
      <h2>Cartografía Digital</h2>
      <p>Generamos cartografía básica y temática, que permite la visualización e interpretación precisa de información</p>
    </div>
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notadigital2} alt="" />
      <h2>Diseño Personalizado</h2>
      <p> Cartografía  100% personalizada a las necesidades del cliente y para todo tipo de trabajos editoriales y visuales. </p>
    </div>
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
    <img src={notadigital3}  className="img-fluid" alt="" />
      <h2>Visualización</h2>
      <p> Proyecta en un mapa tus ideas, datos, información para obtener el máximo potencial en tu proyecto</p> 
    </div>  
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notadigital4}  className="img-fluid" alt="" />
      <h2>Localización</h2>
      <p>De elementos y entidades que te permitan tener un control total de tus proyectos y estudios</p>
    </div>
  </div>
</div> 

{/* Notas Geografía */}
<section className="contenedortextoimagenGeodi">
  <div className=".container-fluid contenedorinterno"> 
    <div className="row">

      <div className="col-md-6 cGeodiimagen">
        <img src={contenedordigital1} class="img-fluid" alt="" />
      </div>


      <div className="col-md-6 cGeoditexto">

        <h2>+80% de los datos puede plasmarse en un mapa </h2>
        <p>En Geocartos® representamos, procesamos y analizamos información geográfica que es una práctica que apunta hacia el futuro</p>

      </div>

    </div>
  </div>
</section>


{/* Contenedor Imagen Full Geografia 1 */}
<section className="contenedorfullimagengeodi1">
  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <h2 className="display-4 font-weight-normal">Una mapa dice más que mil palabras</h2>
      <p className="lead font-weight-normal"><strong>Visualizamos tu información, valoramos tus datos</strong></p> 
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
</section> 


{/* Contenedor Cartas Geografia 1 */}
<section className="cartasgeografia">
  <div className="container ">
    <div className="row">
      
<div className="col-md-4  col-sm-6  col-xs-12 ">
  <div className="card shadow-sm  mb-5 bg-white rounded">
    <img className="card-img-top " src={cartadigital1} alt=" " />
    <div className="card-body">
      <h5 className="card-title">Representación espacial de las universidades</h5>
      <p className="card-text">La geografía impulsa cuestiones sociales a nivel global, nacional y local. Este mapa interactivo de solicitudes de prescripciones de opiáceos (acercado a la costa este de los EE. UU.), revela los sutiles y a menudo trágicos patrones geográficos que emergen cuando los datos están bien cartografiados.</p>
    </div>
  </div>
</div>

<div className="col-md-4  col-sm-6  col-xs-12 ">
  <div className="card shadow-sm mb-5 bg-white rounded">
    <img className="card-img-top " src={cartadigital2} alt=" " />
    <div className="card-body">
      <h5 className="card-title">Mapas para diseño editorial</h5>
      <p className="card-text">La infraestructura verde es un método para abordar retos climáticos y urbanos construyendo con la naturaleza. Es una forma de ver la tierra que nos rodea con un enfoque más ecológico y holístico.</p>
    </div>
  </div>
</div>

<div className="col-md-4  col-sm-6  col-xs-12 ">
  <div className="card shadow-sm  mb-5 bg-white rounded">
    <img className="card-img-top" src={cartadigital3} alt=" " />
    <div className="card-body">
      <h5 className="card-title">Visualización geoespacial de las librerias en CDMX</h5>
      <p className="card-text">Celdas que se deriva de una superficie de elevación.</p>
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
