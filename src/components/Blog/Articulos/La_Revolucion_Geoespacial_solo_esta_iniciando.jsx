import React from 'react'
import './Estilo_Articulo.css';
import { Footer } from '../../Footer/Footer';
import { Barra } from './Barra';

import iniciorevolucion1 from '../../../images/blog/iniciorevolucion.jpeg';


export const La_Revolucion_Geoespacial_solo_esta_iniciando = () => {
  return (
    <div>

{/* Cuerpo Articulo*/}

<div className="container articulocuerpo">

  <div class="row">

    <div class="col-md-8">
      <article classClass="">


<div className="col-md-12 ">
  <div className="card shadow-sm  mb-5 bg-white rounded">
    <img className="card-img-top " src={iniciorevolucion1} alt=" " />
    <div className="card-body">

 <h1 classClass="">La Revolución Geoespacial sólo está iniciando</h1>
        
<p>La tecnología geoespacial se ha utilizado en muchas industrias, pero su valor más amplio ha sido subestimado. Con el crecimiento de softwares que admite una amplia gama de aplicaciones, incluida la recopilación de datos de campo, paneles operativos y nuevas herramientas analíticas, la tecnología geoespacial se está utilizando de muchas maneras en las organizaciones existentes. Las organizaciones “tradicionales” centradas en SIG continúan utilizándolo como su sistema de registro, ampliando la “huella geográfica” a medida que los equipos aprovechan el trabajo y la infraestructura geoespacial existentes.</p>

<br />

<p>Muchas de estas organizaciones se están expandiendo hacia la ciencia de datos, integrando herramientas de análisis SIG para obtener mejores conocimientos sobre sus grandes colecciones de datos. Anteriormente, los SIG se consideraban una herramienta especializada. Durante los últimos, hemos vimos una gran aceptación por parte de nuevas organizaciones que aprovechan aspectos clave de los GIS para abordar sus negocios.</p>

<h2>Muchas no se ven a sí mismas como organizaciones SIG</h2>

<p>Más bien, SIG es una de sus plataformas de inteligencia de datos de clase empresarial y herramientas de simplificación del flujo de trabajo. La revolución geoespacial apenas comienza. Una adopción más amplia y un mayor uso de SIG en los planes de estudios formales están cambiando el panorama de los gerentes, analistas y ejecutivos de próxima generación. Ven el valor del enfoque geográfico en sus áreas tradicionales y más nuevas, influyendo en mercados más amplios. Entienden que el pensamiento geográfico es crucial para gestionar nuestro mundo.</p>

<h2>Soluciones tecnológicas que promueven la sostenibilidad</h2>

<p>Cada industria mira la sostenibilidad de manera diferente, considerando lo que constituye una ciudad sostenible, el abastecimiento para la fabricación, la gestión de las compensaciones de carbono, etc. En todas partes la geografía es un elemento clave en el análisis de las prácticas de sostenibilidad. Las organizaciones utilizan cada vez más gemelos digitales para comprender los desafíos actuales y desarrollar los mejores planes de acción. Pueden ver cómo funciona la infraestructura de una ciudad planificada en condiciones extremas.</p>

<br />

<p>Los gemelos digitales pueden ayudar a identificar activos en riesgo o monitorear dónde ocurren las desigualdades sociales. La IA es otra herramienta aplicada en todas las áreas de sostenibilidad. Ha permitido a las organizaciones simplificar y acelerar la generación de datos mediante la creación automatizada de funciones a partir de datos de detección remota. La IA está brindando a los analistas la capacidad de hacer preguntas más profundas para construir nuevas capas de resultados, modelando lo que fue, lo que es y, en última instancia, lo que podría ser.</p>

      
    </div>
  </div>
</div>



      </article>
    </div>


   <div class="col-md-4">

    <Barra />

   </div>

  </div>

</div>



<Footer />


    </div>
  )
}

