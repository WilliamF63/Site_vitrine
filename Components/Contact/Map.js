import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Definition of markers to be displayed on the map
export const markers = [
  {
    city: 'Besse',
    country: 'France',
    latCoord: 45.51109410575326,
    longCoord: 2.93393089261729,
  },
];

// Map component
const Map = () => {
  // Reference to the map container element
  const mapContainer = useRef(null);
  // Reference to the map instance
  const map = useRef(null);

  // Configuration of markers in GeoJSON format
  const geojson = {
    type: 'Feature',
    features: markers.map((marker) => ({
      properties: {
        city: marker.city,
        country: marker.country,
        iconSize: [30, 42],
        iconBackgroud: 'url(./Marker.png)',
      },
      geometry: {
        type: 'Point',
        coordinates: {
          lat: marker.latCoord,
          lng: marker.longCoord,
        },
      },
    })),
  };

  useEffect(() => {
    // Configuration of Mapbox access token
    mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYW5nZXZhcmUiLCJhIjoiY2w0eTltbzN3MDdsaDNqcG05bmIzdjhoaCJ9.Z8nQ1tZU4hUPf6wmR3rGbw';

    // Creation of the map instance
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [2.93393089261729, 45.51109410575326],
      zoom: 15,
      scrollZoom: false,
      boxZoom: false,
      doubleClickZoom: false,
    });

    // Event triggered when the map is loaded
    map.current.on('load', () => {
      // Adding markers to the map
      geojson.features.forEach((marker) => {
        // Creating a DOM element for the marker
        const markerIcon = document.createElement('div');
        markerIcon.className = 'marker';

        // Creating the marker with coordinates and custom icon
        new mapboxgl.Marker(markerIcon)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(
            // Adding a popup to the marker
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<p>${marker.properties.city}, ${marker.properties.country}</p>`
            )
          )
          .addTo(map.current);
      });
    });

    // Cleanup
    return () => {
      map.current.remove();
    };
  }, []);

  // Rendering the map component
  return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
};

export default Map;
