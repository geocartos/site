import React from 'react'
import './Cursoarcgis.css';
import { Footer } from '../../../Footer/Footer';



export const Cursoarcgis = () => {
    return (
      <div>

{/* Portada Curso Basico ArcGIS*/}
<section className="portadacapacitacion">

<div className="container-fluid portadacapa">
  <div className="row">
    <div className="col-md-12  col-sm-12  col-xs-12 text-center">
      <h1>Curso Básico ArcGIS</h1>
    </div>
  </div>
</div>

</section>


{/* Información del curso */}
<section classNamme="contenedortextoimagenarcgis">
  <h2>Información general</h2>
  <p>El participante adquirirá los conocimientos y las habilidades necesarias para manipular e integrar información cartográfica vectorial para representarla, analizarla y consultarla en un Sistema de Información Geográfica Open Source.

    Además integrará proyectos de información geográfica, así mismo utilizará herramientas de visualización de información vectorial, análisis espacial, simbología, etiquetado, todo ello a través de la plataforma QGIS</p>

  <h2>Temario</h2>

  <div id="accordion">

    <div className="card">
      <div className="card-header" id="headingOne">
        <h5 className="mb-0">
          <button className="btn btn-link" data-toggle="collapse" data-target="#modulouno" aria-expanded="true" aria-controls="modulouno">
            1.0 MÓDULO: Conceptos y fundamentos básicos	
          </button>
        </h5>
      </div>
  
      <div id="modulouno" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
        <div className="card-body">
        El participante podrá conocer los antecedentes de los sistemas de información geográfica, los conceptos principales de cartografía y geodesia que sustentan la teoría detrás de su aplicación, los tipos de datos que se manejan, así como los geoprocesamientos básicos.
        </div>
      </div>
    </div>

    <div className="card">
      <div className="card-header" id="headingTwo">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#modulodos" aria-expanded="false" aria-controls="modulodos">
            2.0 MÓDULO: Introducción con ArcMap y ArcCatalog	
          </button>
        </h5>
      </div>
      <div id="modulodos" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
        <div className="card-body">
        El participante se familiarizará con la interfaz del software, aprenderá a manipular los datos contenidos en su computadora, manipulará los atributos básicos de las capas y aprenderá a crear proyectos y guardarlos apropiadamente. 
         </div>
      </div>
    </div>

    <div className="card">
      <div className="card-header" id="headingThree">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#modulotres" aria-expanded="false" aria-controls="modulotres">
            3.0 MÓDULO: Propiedades de los datos geográficos
          </button>
        </h5>
      </div>
      <div id="modulotres" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
        <div className="card-body">
        Aquí el participante podrá aplicar la teoría vista en el Módulo 1 respecto a los sistemas de coordenadas, a cambiar entre proyecciones, definir los más adecuados según el área de estudio y visualizar y editar metadatos. </div>
      </div>
    </div>

    <div className="card">
      <div className="card-header" id="headingThree">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#modulocuatro" aria-expanded="false" aria-controls="modulocuatro">
            4.0 MÓDULO: Las tablas de atributos	
          </button>
        </h5>
      </div>
      <div id="modulocuatro" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
        <div className="card-body">
        En este módulo el participante conocerá los atributos asociados a los datos geográficos, a visualizarlos, crearlo, manipularlos, editarlos y a calcular propiedades geométricas básicas de esos datos.  </div>
      </div>
    </div>


    <div className="card">
      <div className="card-header" id="headingThree">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#modulocinco" aria-expanded="false" aria-controls="modulocinco">
            5.0 MÓDULO: La simbología
          </button>
        </h5>
      </div>
      <div id="modulocinco" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
        <div className="card-body">
        Este módulo está diseñado para que el participante pueda representar los datos geográficos de manera adecuada dependiendo su naturaleza, conociendo las opciones que el software ofrece, a través de colores, símbolos, y otros métodos visuales que permitan comunicar adecuadamente la información contenida en esos datos. 
        </div>
    </div>
    </div>


    <div className="card">
      <div className="card-header" id="headingThree">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#moduloseis" aria-expanded="false" aria-controls="moduloseis">
            6.0 MÓDULO: Etiquetado de elementos	
          </button>
        </h5>
      </div>
      <div id="moduloseis" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
        <div className="card-body">
        El participante en este módulo aprenderá a colocar etiquetas que permitan identificar y nombrar los datos geográficos, tomando en cuenta su naturaleza, el formato adecuado, su posición, entre otros factores. 
        </div>
      </div>
    </div>

    <div className="card">
      <div className="card-header" id="headingThree">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#modulosiete" aria-expanded="false" aria-controls="modulosiete">
            7.0 MÓDULO: Creación, edición y georreferenciación
          </button>
        </h5>
      </div>
      <div id="modulosiete" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
        <div className="card-body">
        En el penúltimo módulo el participante será capaz de crear nuevos elementos vectoriales en el formato más usado, a dibujar elementos geográficos de una imagen, a exportar esos elementos creados a otros formatos populares, entre otros elementos de edición esenciales para la creación de datos geográficos nuevos.  
        </div>
      </div>
    </div>

    <div className="card">
      <div classNme="card-header" id="headingThree">
        <h5 class="mb-0">
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#moduloocho" aria-expanded="false" aria-controls="moduloocho">
            8.0 MÓDULO: Diseño y presentación de mapa
          </button>
        </h5>
      </div>
      <div id="moduloocho" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
        <div className="card-body">
        En el último módulo el participante configurará los parámetros necesarios para presentar sus datos geográficos como un mapa entre los que se encuentran la leyenda, la gratícula, las simbologías, parámetros de impresión,  así como exportar su proyecto final a otros formatos útiles. 
        </div>
      </div>
    </div>


  </div>

 

  <h2>Requisitos</h2>
    <p>CPU: 2.2 GHz mínimo. Recomendados CPU multinúcleo AMD o Intel. </p>
    <p>Tipo de sistema: x86 o x64 </p>
    <p>RAM: Mínimo 4 GB, óptimo 8GB o superior. </p>
    <p>Pantalla: Color a 24 bits. Resolución 1024x768 recomendada.</p>
    <p>Disco Duro: Mínimo 4 GB libres, óptimo 6 GB o más. </p>
    <p>Gráficos/Video: Mínimo 64 MB RAM, óptimo 256 GB RAM o superior. </p>

  <h2>Inscripción</h2>
<p>Enviar correo geocartosmx@outlook.com con el asunto “Curso ArcMap Básico” con la siguiente información:</p>
<li>Nombre completo</li>
<li>Ocupación</li>
<li>Nacionalidad</li>
<li>Correo Eléctronico</li>
<li>Comprobante de pago</li>
<br/>
<p>Si la inscripción fue completada correctamente, enviaremos un correo electrónico de confirmación junto con la información para realizar el pago. 

Si usted envía desde otro país fuera de México, recomendamos usar la aplicación Wise para transferencias mundiales, o ponerse en contacto con nosotros si dicha aplicación no está disponible en su país (texto para el correo). 
</p>

  <h2>Tutor</h2>
  <p>Miguel Santellán, licenciado en Ciencias Ambientales con Máster en Planeación del Paisaje por la universidad Czech University of Life Sciences, con especialidades SIG para diversas aplicaciones. </p>
</section>

  

  <Footer />
      </div>
    )
  }
  