import React from 'react'
import './Barra.css';
import { NavLink } from 'react-router-dom';

import iniciandorevolucion1 from '../../../images/blog/iniciorevolucion.jpeg';
import evolucionSIG1 from '../../../images/blog/evolucionSIG.jpg';
import selecciondesitios1 from '../../../images/blog/selecciondesitios.jpeg';

export const Barra = () => {
  const articles = [
    {
      id: 1,
      backgroundImage: iniciandorevolucion1,
      title: "La Revolución Geoespacial",
      subtitle: "ARTÍCULO UNO",
      description: "Descubre cómo la tecnología geoespacial está transformando el mundo moderno y las oportunidades que ofrece para el futuro.",
      link: "/La_Revolucion_Geoespacial_solo_esta_iniciando"
    },
    {
      id: 2,
      backgroundImage: evolucionSIG1,
      title: "Evolución de los SIG",
      subtitle: "ARTÍCULO DOS", 
      description: "Explora la evolución histórica de los Sistemas de Información Geográfica y su impacto en diferentes industrias.",
      link: "/Evolucion_de_los_SIG"
    },
    {
      id: 3,
      backgroundImage: selecciondesitios1,
      title: "Selección de Sitios con GIS",
      subtitle: "ARTÍCULO TRES",
      description: "Aprende sobre la importancia de los GIS en la selección estratégica de sitios para proyectos de desarrollo.",
      link: "/Importancia de los GIS en la selección de sitios"
    }
  ];

  return (
    <div className="minimal-articles-container">
      <div className="row">
        {articles.map((article) => (
          <div key={article.id} className="col-md-4 mb-4">
            <div className="minimal-article">
              <div 
                className="article-image"
                style={{ backgroundImage: `url(${article.backgroundImage})` }}
              ></div>
              
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
                
                <NavLink to={article.link} className="article-link">
                  Leer más →
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

