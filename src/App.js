//import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Contacto } from './components/Contacto/Contacto';
import { Privacidad } from './components/Privacidad/Privacidad'
import { Error404 } from './components/Error404/Error404';


import { IngenieriayConstruccion } from './components/IngenieriayConstruccion/IngenieriayConstruccion';
import { GobiernoySociedad } from './components/GobiernoySociedad/GobiernoySociedad';
import { RecursosNaturalesyMedioAmbiente } from './components/RecursosNaturalesyMedioAmbiente/RecursosNaturalesyMedioAmbiente';
import { MarketingyNegocios } from './components/MarketingyNegocios/MarketingyNegocios';
import { Logistica } from './components/Logistica/Logistica';
import { Capacitacion } from './components/Capacitacion/Capacitacion';
import { Cursoarcgis } from './components/Capacitacion/Cursos/Cursoarcgis/Cursoarcgis'

import { Geografiadigital } from './components/Geografiadigital/Geografiadigital'
import { TeledeteccionySensores } from './components/TeledeteccionySensores/TeledeteccionySensores'
import { Plataformasdigitales } from './components/Plataformasdigitales/Plataformasdigitales'

import { Blog } from './components/Blog/Blog'
import { Barra } from './components/Blog/Articulos/Barra'
import { Mapaciclistapuebla } from './components/Blog/Articulos/El_poder_del_Big_Data_combinado_con_GIS'
import { Importancia_de_los_GIS_en_la_seleccion_de_sitios } from './components/Blog/Articulos/Importancia_de_los_GIS_en_la_seleccion_de_sitios'
import { Mapas_y_mas_alla } from './components/Blog/Articulos/Mapas_y_mas_alla'
import { SQL_en_GIS } from './components/Blog/Articulos/SQL_en_GIS'
import { La_Revolucion_Geoespacial_solo_esta_iniciando } from './components/Blog/Articulos/La_Revolucion_Geoespacial_solo_esta_iniciando'
import { Evolucion_de_los_SIG } from './components/Blog/Articulos/Evolucion_de_los_SIG'






import { HashRouter, Routes, Route } from 'react-router-dom';





function App() {
  return (
    <div className="App">

<HashRouter>
<Header />

<Routes>
  <Route exact path="/" element={<Home />}/>
  <Route exact path="/home" element={<Home />}/>

  <Route exact path="/IngenieriayConstruccion" element={<IngenieriayConstruccion />}/>
  <Route exact path="/GobiernoySociedad" element={<GobiernoySociedad />}/>
  <Route exact path="/RecursosNaturalesyMedioAmbiente" element={<RecursosNaturalesyMedioAmbiente />}/>
  <Route exact path="/MarketingyNegocios" element={<MarketingyNegocios />}/>
  <Route exact path="/Logistica" element={<Logistica/>}/>
  <Route exact path="/Capacitacion" element={<Capacitacion />}/>
  <Route exact path="/Cursoarcgis" element={<Cursoarcgis />}/>

  <Route exact path="/Geografiadigital" element={<Geografiadigital />}/>
  <Route exact path="/TeledeteccionySensores" element={<TeledeteccionySensores />}/>
  <Route exact path="/Plataformasdigitales" element={<Plataformasdigitales />}/>

  <Route exact path="/Contacto" element={<Contacto />}/>
  <Route exact path="/Privacidad" element={<Privacidad />}/>

  <Route exact path="/Blog" element={<Blog />}/>
  <Route exact path="/Barra" element={<Barra />}/>
  <Route exact path="/Mapaciclistapuebla" element={<Mapaciclistapuebla />}/>
  <Route exact path="/Importancia_de_los_GIS_en_la_seleccion_de_sitios" element={<Importancia_de_los_GIS_en_la_seleccion_de_sitios />}/>
  <Route exact path="/Mapas_y_mas_alla" element={<Mapas_y_mas_alla />}/>
  <Route exact path="/SQL_en_GIS" element={<SQL_en_GIS />}/>
  <Route exact path="/La_Revolucion_Geoespacial_solo_esta_iniciando" element={<La_Revolucion_Geoespacial_solo_esta_iniciando />}/>
  <Route exact path="/Evolucion_de_los_SIG" element={<Evolucion_de_los_SIG />}/>

 

 
  
  
  <Route exact path="*" element={<Error404 />}/>

  

  
</Routes>

</HashRouter>



  

    </div>
  );
}

export default App;
