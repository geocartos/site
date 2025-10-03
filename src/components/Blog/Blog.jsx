import React from 'react'
import './Blog.css';
import { Footer } from '../Footer/Footer';
import { NavLink } from 'react-router-dom';


import elpoderdelbigdatacombinadoconGIS from '../../images/blog/bigdata.jpeg';
import importanciadelosgisenlaselecciondesitios from '../../images/blog/selecciondesitios.jpeg';
import mapasymasalla from '../../images/blog/masalla.jpeg';
import SQL_en_GIS from '../../images/blog/sqlgis.jpeg';
import iniciorevolucion from '../../images/blog/iniciorevolucion.jpeg';
import evolucionSIG from '../../images/blog/evolucionSIG.jpg';

export const Blog = () => {
  return (
    <div>
 
{/* Portada Blog*/}
<section className="portadablog">
  <div className="container-fluid portablog">
    <div className="row">
      <div className="col-md-12  col-sm-12  col-xs-12 text-center">        
        <h1>Blog </h1>
        <p>Espacio para la divulgación de temas sobre Sistemas de Información Geográfica</p>

      </div>
    </div>
  </div>
</section>

<section className="contenedorblog"> 
  

<div className="row mb-2">
  <div className="col-md-6 targeta">
  <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
  <div className="col p-4 d-flex flex-column position-static">
        <h1 >El poder del Big Data combinado con GIS</h1>
        <h2>This is a wider card with supporting text below as a natural lead-in to additional content.</h2>
        <h3>Big Data</h3>
        <h4><NavLink to="/El_poder_del_Big_Data_combinado_con_GIS">Continuar leyendo</NavLink></h4>
      </div>
      <div class="col-auto d-none d-lg-block">

      <img width="200" height="250" src={elpoderdelbigdatacombinadoconGIS} alt="" />
      </div>

  </div>
  </div>

  <div className="col-md-6 targeta">
  <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
  <div className="col p-4 d-flex flex-column position-static">
        <h1>Importancia de los GIS en la selección de sitios</h1>
        <h2>This is a wider card with supporting text below as a natural lead-in to additional content.</h2>
        <h3>Geomarketing</h3>
        <h4><NavLink to="/Importancia_de_los_GIS_en_la_seleccion_de_sitios">Continuar leyendo</NavLink></h4>
      </div>
      <div class="col-auto d-none d-lg-block">

      <img width="200" height="250" src={importanciadelosgisenlaselecciondesitios} alt="" />
      </div>

  </div>
  </div>
</div>

<div className="row mb-2">
  <div className="col-md-6 targeta">
  <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
  <div className="col p-4 d-flex flex-column position-static">
        <h1>Mapas y más allá</h1>
        <h2>This is a wider card with supporting text below as a natural lead-in to additional content.</h2>
        <h3>Big Data</h3>
        <h4><NavLink to="/mapas_y_mas_alla">Continuar leyendo</NavLink></h4>
      </div>
      <div class="col-auto d-none d-lg-block">

      <img width="200" height="250" src={mapasymasalla} alt="" />
      </div>

  </div>
  </div>

  <div className="col-md-6 targeta">
  <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
  <div className="col p-4 d-flex flex-column position-static">
        <h1>SQL en GIS</h1>
        <h2>This is a wider card with supporting text below as a natural lead-in to additional content.</h2>
        <h3>Big Data</h3>
        <h4><NavLink to="/SQL_en_GIS">Continuar leyendo</NavLink></h4>
      </div>
      <div class="col-auto d-none d-lg-block">

      <img width="200" height="250" src={SQL_en_GIS} alt="" />
      </div>

  </div>
  </div>
</div>


<div className="row mb-2">
  <div className="col-md-6 targeta">
  <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
  <div className="col p-4 d-flex flex-column position-static">
        <h1>La Revolución Geoespacial sólo está iniciando </h1>
        <h2>This is a wider card with supporting text below as a natural lead-in to additional content.</h2>
        <h3>Geomarketing</h3>
        <h4><NavLink to="/La_Revolucion_Geoespacial_solo_esta_iniciando">Continuar leyendo</NavLink></h4>
      </div>
      <div class="col-auto d-none d-lg-block">

      <img width="200" height="250" src={iniciorevolucion} alt="" />
      </div>

  </div>
  </div>

  <div className="col-md-6 targeta">
  <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
  <div className="col p-4 d-flex flex-column position-static">
        <h1>Evolución de los SIG </h1>
        <h2>This is a wider card with supporting text below as a natural lead-in to additional content.</h2>
        <h3>Geomarketing</h3>
        <h4><NavLink to="/Evolucion_de_los_SIG">Continuar leyendo</NavLink></h4>
      </div>
      <div class="col-auto d-none d-lg-block">

      <img width="200" height="250" src={evolucionSIG} alt="" />
      </div>

  </div>
  </div>
</div>

</section>

{/*
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
    <NavLink to="/GobiernoySociedad">Anterior</NavLink>
    </li>
    <li class="page-item"><NavLink to="/GobiernoySociedad">1</NavLink></li>
    <li class="page-item active">
    <NavLink to="/GobiernoySociedad">1</NavLink>
    </li>
    <li class="page-item"><NavLink to="/GobiernoySociedad">3</NavLink></li>
    <li class="page-item">
    <NavLink to="/GobiernoySociedad">Siguiente</NavLink>
    </li>
  </ul>
</nav>
  */}

<Footer />
    </div>
  )
}

