import axios from "axios";
import { useEffect, useRef, useState } from "react";

const Map = () => {
  const mapRef = useRef(null);
  // const [showDropdown, setShowDropdown] = useState(false);
  // const [selectedForest, setSelectedForest] = useState(null);
  // const [selectedAnimals, setSelectedAnimals] = useState({});
  // const [sPolygon, setSPolygon] = useState([]);
  // const [nPolygon, setNPolygon] = useState([]);


  useEffect(() => {
    if (window.L) {
      const L = window.L;
      mapRef.current = L.map("map").setView([20.5937, 85.9629], 5);

      const openStreetMap = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      const googleStreets = L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      });

      const googleHyBride = L.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}", {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      });

      const googleSat = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      });

      const googleTerrain = L.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}", {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      });

      const allLayers = {
        OpenStreetMap: openStreetMap,
        GoogleStreets: googleStreets,
        GoogleHyBride: googleHyBride,
        GoogleSat: googleSat,
        GoogleTerrain: googleTerrain,
      };

      L.control.layers(allLayers).addTo(mapRef.current);
    }
  }, []);

  // useEffect(() => {
  //   async function getForestPolygon() {
  //     try {
       
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }

  //   getForestPolygon();
  // }, []);

  // const toggleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };

  // const handleForestSelection = (forest) => {
  //   setSelectedForest(forest);
  //   setSelectedAnimals({});
  // };

  // const handleAnimalSelection = (animal) => {
  //   setSelectedAnimals((prev) => ({
  //     ...prev,
  //     [animal]: !prev[animal],
  //   }));
  // };

  return (
    <div style={{ position: "relative" }}>
      {/* <div style={{ position: "absolute", top: "60px", right: "10px", zIndex: 1000 }}>
        <button onClick={toggleDropdown} style={{ padding: "10px", borderRadius: "5px", background: "white", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
          Select Forest
        </button>
        {showDropdown && (
          <div style={{ background: "white", padding: "10px", borderRadius: "5px", marginTop: "5px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
            <div>
              <input type="radio" id="simlipal" name="forest" onChange={() => handleForestSelection("simlipal")} />
              <label htmlFor="simlipal">Simlipal</label>
            </div>
            {selectedForest === "simlipal" && (
              <div style={{ marginLeft: "20px" }}>
                <div>
                  <input type="checkbox" id="mammals" onChange={() => handleAnimalSelection("mammals")} checked={selectedAnimals["mammals"] || false} />
                  <label htmlFor="mammals">Mammals</label>
                </div>
                <div>
                  <input type="checkbox" id="birds" onChange={() => handleAnimalSelection("birds")} checked={selectedAnimals["birds"] || false} />
                  <label htmlFor="birds">Birds</label>
                </div>
                <div>
                  <input type="checkbox" id="reptiles" onChange={() => handleAnimalSelection("reptiles")} checked={selectedAnimals["reptiles"] || false} />
                  <label htmlFor="reptiles">Reptiles</label>
                </div>
              </div>
            )}
            <div>
              <input type="radio" id="nandankanan" name="forest" onChange={() => handleForestSelection("nandankanan")} />
              <label htmlFor="nandankanan">Nandankanan</label>
            </div>
            {selectedForest === "nandankanan" && (
              <div style={{ marginLeft: "20px" }}>
                <div>
                  <input type="checkbox" id="mammals" onChange={() => handleAnimalSelection("mammals")} checked={selectedAnimals["mammals"] || false} />
                  <label htmlFor="mammals">Mammals</label>
                </div>
                <div>
                  <input type="checkbox" id="birds" onChange={() => handleAnimalSelection("birds")} checked={selectedAnimals["birds"] || false} />
                  <label htmlFor="birds">Birds</label>
                </div>
                <div>
                  <input type="checkbox" id="reptiles" onChange={() => handleAnimalSelection("reptiles")} checked={selectedAnimals["reptiles"] || false} />
                  <label htmlFor="reptiles">Reptiles</label>
                </div>
              </div>
            )}
          </div>
        )}
      </div> */}
      <div id="map" style={{ width: "100%", height: "650px" }}></div>
    </div>
  );
};

export default Map;
