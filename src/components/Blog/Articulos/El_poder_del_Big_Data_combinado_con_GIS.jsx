import React from 'react'
import './Estilo_Articulo.css';
import { Footer } from '../../Footer/Footer';
import { Barra } from './Barra';
import MapaCiclista from '../../MapaCiclista';


export const Mapaciclistapuebla = () => {
  return (
    <div>
      {/* Cuerpo Articulo */}
      <div className="container articulocuerpo">
        {/* Mapa Interactivo en la parte superior - Ancho completo */}
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="mb-3">Mapa Ciclista de Puebla</h1>
            <p className="mb-4 text-muted">
              Explora la red de ciclovías y carriles bici de Puebla. Haz clic en cualquier elemento para obtener información detallada.
            </p>
            <MapaCiclista />
          </div>
        </div>

        {/* Contenido del artículo - Texto reducido */}
        <div className="row mb-5">
          <div className="col-md-8">
            <article>
              <h2 className="mb-4">Navegando las Rutas Urbanas</h2>
              <p className="mb-4">
                Los mapas ciclistas son herramientas esenciales para promover el transporte sostenible en las ciudades modernas, permitiendo a los ciclistas encontrar rutas seguras y eficientes.
              </p>

              <h3 className="mb-3">Características principales</h3>
              <p className="mb-4">
                Incluyen información sobre ciclovías, carriles bici, pendientes, estaciones de bicicletas públicas y estacionamientos seguros para una navegación óptima.
              </p>

              <h3 className="mb-3">Beneficios urbanos</h3>
              <p className="mb-5">
                Fomentan el uso de la bicicleta como transporte, reduciendo la congestión vehicular y las emisiones contaminantes hacia una movilidad más sostenible.
              </p>
            </article>
          </div>
        </div>

        {/* Artículos relacionados */}
        <div className="row">
          <div className="col-12">
            <h2 className="mb-4">Artículos relacionados</h2>
            <Barra />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}



