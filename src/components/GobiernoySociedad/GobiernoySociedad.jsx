import React from 'react';
import './GobiernoySociedad.css';
import { Footer } from '../Footer/Footer';
import notagobierno1 from '../../images/gobierno/notagobierno1.png';
import notagobierno2 from '../../images/gobierno/notagobierno2.png';
import notagobierno3 from '../../images/gobierno/notagobierno3.png';
import notagobierno4 from '../../images/gobierno/notagobierno4.png';
import analisisterritorio from '../../images/gobierno/imganalisisterritorial1.png';

export const GobiernoySociedad = () => {
  return (
    <div>

      {/* Portada Gobierno */}
      <section className="portadagobierno">
        <div className="container-fluid portadagob">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Gobierno y Sociedad</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Notas Gobierno */}
      <div className="container notasgobierno">
        <div className="row">
          {[notagobierno1, notagobierno2, notagobierno3, notagobierno4].map((img, i) => (
            <div key={i} className="col-lg-3 col-md-6 col-sm-12 text-center">
              <img src={img} alt="" className="img-fluid" />
              <h2>{["Visualización","Gestión","Modernización","Seguimiento"][i]}</h2>
              <p>{[
                "Del territorio urbano, rural y natural, desde sus elementos físicos hasta sus problemáticas con perspectiva geográfica",
                "De recursos, tiempo, dinero y esfuerzos de manera inteligente mediante el análisis geográfico o geoespacial",
                "Del sector público con ayuda de geotecnologías para atender las necesidades de una sociedad en progreso",
                "Con geotecnologías para facilitar el monitoreo de proyectos, estrategias, políticas o cualquier acción transformadora con alcance político-social"
              ][i]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contenedor Imagen Full Gobierno 1 */}
      <section className="contenedorfullgobierno1">
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-normal">Geogobierno</h1>
            <p className="lead font-weight-normal">Los mapas y análisis inteligentes hacen avanzar al gobierno</p>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
      </section>

      {/* Contenedor Texto-Imagen Territorial */}
      <section className="contenedortextoimagenTerri">
        <div className="container contenedorinterno">
          <div className="row">

            <div className="col-lg-6 col-md-12 cTerritexto">
              <h2>Análisis de Territorio</h2>
              <h3>Atlas de Riesgos</h3>
              <ul>
                <li><i className="far fa-check-circle"></i> Identifica principales amenazas naturales en tu localidad.</li>
              </ul>
              <h3>Planificación Urbana</h3>
              <ul>
                <li><i className="far fa-check-circle"></i> Planeación para la gestión y uso correcto del suelo.</li>
                <li><i className="far fa-check-circle"></i> Regulación del crecimiento urbano con datos demográficos.</li>
              </ul>
            </div>

            <div className="col-lg-6 col-md-12 cTerriimagen text-center">
              <img src={analisisterritorio} className="img-fluid" alt="Atlas de Riesgo" style={{ maxWidth: '100%' }} />
            </div>

          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}
