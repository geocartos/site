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

      {/* Portada Ingenieria */}
      <section className="portadaingenieria">
        <div className="container-fluid portadainge">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Infraestructura</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Notas Ingenieria */}
      <div className="container notasingenieria">
        <div className="row">
          {[notaingenieria1, notaingenieria2, notaingenieria3, notaingenieria4].map((img, i) => (
            <div key={i} className="col-lg-3 col-md-6 col-sm-12 text-center">
              <img src={img} alt="" className="img-fluid" />
              <h2>{["Digitalización", "Planeación", "Gestión", "Decisión"][i]}</h2>
              <p>{[
                "Analiza escenarios de forma digital para agilizar tus procesos",
                "Evalúa con análisis geoespacial diferentes factores que puedan afectar tus proyectos",
                "Sigue avances de proyectos mediante imágenes y plataformas geográficas",
                "Realiza estudios multicriterio mediante información geográfica para tomar las mejores decisiones"
              ][i]}</p>
            </div>
          ))}
        </div>
      </div> 

      {/* Contenedor Full Ingenieria 1 */}
      <section className="contenedorfulligenieria1">
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <p className="lead font-weight-normal">
              En Geocartos® somos pioneros en la implementación de tecnología geoespacial para elaboración de modelado de información de construcción (BIM)
            </p>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
      </section>

      {/* Contenedor TextoImagen Construccion */}
      <section className="contenedortextoimagenCons">
        <div className="container contenedorinterno">
          <div className="row">
            <div className="col-lg-6 col-md-12 cConstexto">
              <h2>Obra Civil</h2>
              <h3>Monitoreo y gestión</h3>
              <ul>
                <li><i className="far fa-check-circle"></i> Desarrollo de Dashboards para llevar el control de los proyectos de infraestructura.</li>
                <li><i className="far fa-check-circle"></i> Seguimiento de obra mediante dron e imágenes satelitales ópticas o radar.</li>
              </ul>
              <h3>Cumplimiento de normatividad</h3>
              <ul>
                <li><i className="far fa-check-circle"></i> Apoyo en la elaboración de manifestaciones de impacto ambiental para construcción.</li>
                <li><i className="far fa-check-circle"></i> Revisamos si tu proyecto está en áreas protegidas o puede infringir normas ambientales.</li>
              </ul>
              <h3>Digitalización de Entornos</h3>
              <ul>
                <li><i className="far fa-check-circle"></i> Gemelos digitales.</li>
                <li><i className="far fa-check-circle"></i> Fotogrametría y nubes de puntos.</li>
                <li><i className="far fa-check-circle"></i> Cálculo de volúmenes.</li>
                <li><i className="far fa-check-circle"></i> Estabilidad de taludes y cálculo de volúmenes.</li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 cConsimagen text-center">
              <img src={obracivil} className="img-fluid" alt="Obra Civil" style={{ maxWidth: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Contenedor TextoImagen Hidrologia */}
      <section className="contenedortextoimagenHidro">
        <div className="container contenedorinterno">
          <div className="row">
            <div className="col-lg-6 col-md-12 cHidroimagen text-center">
              <img src={hidro1} className="img-fluid" alt="Hidrología" style={{ maxWidth: '100%' }} />
            </div>
            <div className="col-lg-6 col-md-12 cHidrotexto">
              <h3>Estudios digitales del terreno</h3>
              <ul>
                <li><i className="far fa-check-circle"></i> Estabilidad de taludes y cálculo de volúmenes.</li>
                <li><i className="far fa-check-circle"></i> Modelos digitales del terreno.</li>
                <li><i className="far fa-check-circle"></i> Análisis de hundimiento del terreno al milímetro.</li>
              </ul>
              <h3>Análisis Hidrogeológicos</h3>
              <ul>
                <li><i className="far fa-check-circle"></i> Análisis para zonas de recarga y descarga.</li>
                <li><i className="far fa-check-circle"></i> Estudios hidrogeológicos y cuencas.</li>
                <li><i className="far fa-check-circle"></i> Ubicar zonas de inundación.</li>
                <li><i className="far fa-check-circle"></i> Identificación para zonas de riesgo.</li>
              </ul>
              <h3>Estudios multicriterio para proyectos de infraestructura</h3>
              <ul>
                <li><i className="far fa-check-circle"></i> Conoce el entorno territorial del proyecto, sus riesgos y afectaciones.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contenedor TextoImagen TeleCom */}
      <section className="contenedortextoimagenTele">
        <div className="container contenedorinterno">
          <div className="row">
            <div className="col-lg-6 col-md-12 cTeleimagen text-center">
              <img src={telecom} className="img-fluid" alt="TeleCom" style={{ maxWidth: '100%' }} />
            </div>
            <div className="col-lg-6 col-md-12 cTeletexto">
              <h2>TeleCom</h2>
              <h3>Estudio geoespacial para ubicar la mejor cobertura de antenas</h3>
              <ul>
                <li><i className="far fa-check-circle"></i> Obtén la mejor rentabilidad de la señal a través de un análisis geoespacial del entorno.</li>
              </ul>
              <h3>Digitalización de procesos</h3>
              <ul>
                <li><i className="far fa-check-circle"></i> Generación de gemelos digitales para el mejor análisis.</li>
                <li><i className="far fa-check-circle"></i> Supervisión mediante drone.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
