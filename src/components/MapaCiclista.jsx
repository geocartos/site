import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapaCiclista.css';

// Importar los iconos de Leaflet manualmente
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Configurar iconos por defecto
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapaCiclista = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current === null) {
      // Inicializar el mapa centrado en Puebla
      const map = L.map('mapa-ciclista').setView([19.043, -98.197], 13);
      mapRef.current = map;

      // Agregar capa base de OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Cargar y mostrar los datos GeoJSON
      fetch('/site/infraestructura_ciclista_puebla.geojson')
        .then(response => {
          console.log('Response status:', response.status);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('GeoJSON data loaded:', data);
          console.log('Number of features:', data.features ? data.features.length : 0);
          // Agregar los datos al mapa
          L.geoJSON(data, {
            filter: (feature) => {
              // Logging para debug
              console.log('Feature geometry type:', feature.geometry.type);
              
              // Solo mostrar geometrías de tipo LineString, MultiLineString y GeometryCollection con líneas
              const geomType = feature.geometry.type;
              if (geomType === 'LineString' || geomType === 'MultiLineString') {
                console.log('Showing LineString/MultiLineString feature');
                return true;
              }
              if (geomType === 'GeometryCollection') {
                // Verificar si contiene líneas
                const hasLines = feature.geometry.geometries.some(geom => 
                  geom.type === 'LineString' || geom.type === 'MultiLineString'
                );
                console.log('GeometryCollection has lines:', hasLines);
                return hasLines;
              }
              console.log('Filtering out feature type:', geomType);
              return false; // Ocultar puntos
            },
            style: (feature) => {
              // Estilo mejorado para las líneas (ciclovías)
              return {
                color: '#e74c3c',
                weight: 4,
                opacity: 0.9,
                lineCap: 'round',
                lineJoin: 'round'
              };
            },
            onEachFeature: (feature, layer) => {
              // Agregar popup con información para ciclovías
              if (feature.properties) {
                const props = feature.properties;
                let popupContent = '<div style="font-family: Arial, sans-serif;">';
                
                // Título principal
                if (props.name || props.Name) {
                  popupContent += `<h4 style="color: #e74c3c; margin-bottom: 10px;">${props.name || props.Name}</h4>`;
                }
                
                // Información técnica
                if (props.Tipo || props.SEPARACI臓) {
                  popupContent += `<p><strong>🚴 Tipo:</strong> ${props.Tipo || props.SEPARACI臓}</p>`;
                }
                
                if (props.Direccion || props.SENTIDO) {
                  popupContent += `<p><strong>↗️ Dirección:</strong> ${props.Direccion || props.SENTIDO}</p>`;
                }
                
                if (props.Longitud || props.LONG_m) {
                  popupContent += `<p><strong>📏 Longitud:</strong> ${props.Longitud || props.LONG_m} km</p>`;
                }
                
                if (props.ANCHO) {
                  popupContent += `<p><strong>🔖 Ancho:</strong> ${props.ANCHO} m</p>`;
                }
                
                if (props.Ano || props.A_TERMINO) {
                  popupContent += `<p><strong>📅 Año:</strong> ${props.Ano || props.A_TERMINO}</p>`;
                }
                
                if (props.Jurisdicci || props.JURISD_) {
                  popupContent += `<p><strong>🏛️ Jurisdicción:</strong> ${props.Jurisdicci || props.JURISD_}</p>`;
                }
                
                popupContent += '</div>';
                
                layer.bindPopup(popupContent, {
                  maxWidth: 300,
                  className: 'ciclovia-popup'
                });
              }
            }
          }).addTo(map);
        })
        .catch(error => {
          console.error('Error cargando los datos GeoJSON:', error);
          // Mostrar mensaje de error en el mapa
          const errorDiv = document.createElement('div');
          errorDiv.innerHTML = `
            <div style="position: absolute; top: 10px; left: 10px; background: #ff4757; color: white; padding: 10px; border-radius: 5px; z-index: 1000;">
              <strong>Error:</strong> No se pudieron cargar los datos del mapa.<br>
              <small>${error.message}</small>
            </div>
          `;
          document.getElementById('mapa-ciclista').appendChild(errorDiv);
        });

      // Agregar control de escala
      L.control.scale().addTo(map);
    }

    // Cleanup function
    return () => {
      if (mapRef.current !== null) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="mapa-ciclista-container">
      <h2 className="mapa-titulo">
        Infraestructura Ciclista de Puebla
      </h2>
      <div id="mapa-ciclista" className="mapa-contenedor"></div>
      <div className="mapa-leyenda">
        <h4>Leyenda:</h4>
        <p>🔴 <span className="leyenda-linea">Líneas rojas:</span> Red de ciclovías y carriles bici de Puebla</p>
        <p><em>Haz clic en cualquier línea del mapa para ver información detallada de la ruta</em></p>
      </div>
    </div>
  );
};

export default MapaCiclista;