import { useEffect, useRef } from "react";

const Map = () => {

  useEffect(() => {
    // const map = L.map('map').setView([20.5937, 85.9629], 5);

    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);

    // // first layer 
    // L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    //   maxZoom: 20,
    //   subdomains:['mt0','mt1','mt2','mt3']
    // }).addTo(map);

    // // second layer 
    // L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    //   maxZoom: 20,
    //   subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    // }).addTo(map);

    // // third layer 
    // L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    //   maxZoom: 20,
    //   subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    // }).addTo(map);


    // // fourth layer 
    // L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
    //   maxZoom: 20,
    //   subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    // }).addTo(map);

    if (window.L) {
      const L = window.L;

      //Initialize the map
      const map = L.map('map').setView([20.5937, 85.9629], 5);

      //Base Layers (Tile Layers)
      const openStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      });

      const googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      });

      const googleHyBride = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      });

      const googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      });

      const googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      });

      //Add OpenStreetMap as the default layer
      openStreetMap.addTo(map);

      //Define layer control
      const allLayers = {
        "OpenStreetMap": openStreetMap,
        "GoogleStreets": googleStreets,
        "GoogleHyBride": googleHyBride,
        "GoogleSat": googleSat,
        "GoogleTerrain": googleTerrain
      };

      //Add layer control to the map
      L.control.layers(allLayers).addTo(map);
    }
  }, []);

  return (
    <div id="map">

    </div>
  );
}

export default Map;