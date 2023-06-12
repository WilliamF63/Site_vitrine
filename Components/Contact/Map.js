import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


export const markers = [
    {
      city: 'Besse',
      country: 'France',
      latCoord: 45.51109410575326,
      longCoord: 2.93393089261729,
    },
  ]


const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const geojson = {
    type: 'Feature',
    features: markers.map((marker) => ({
      properties: {
        city: marker.city,
        country: marker.country,
        iconSize: [30, 42],
        iconBackgroud: 'url (./Marker.png)',
      },
      geometry: {
        type: 'Point',
        coordinates: {
          lat: marker.latCoord,
          lng: marker.longCoord
        }
      }
    }))
  };

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYW5nZXZhcmUiLCJhIjoiY2w0eTltbzN3MDdsaDNqcG05bmIzdjhoaCJ9.Z8nQ1tZU4hUPf6wmR3rGbw';
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [2.93393089261729, 45.51109410575326],
      zoom: 15,
      scrollZoom      : false,
        boxZoom         : false,
        doubleClickZoom : false
    });
    map.current.on('load', () => {
      geojson.features.forEach((marker) => {
      // create a DOM element for the marker
      const markerIcon = document.createElement('div');
      markerIcon.className = 'marker';
      
      new mapboxgl.Marker(markerIcon)
        .setLngLat(marker.geometry.coordinates) // add marker to map
        .setPopup( // add pop out to map
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

  
 

  return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
};

export default Map;
