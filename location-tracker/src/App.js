// App.js
import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import "./App.css";

function App() {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting current position:", error);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="App">
      <h1>Location Tracker</h1>
      <div style={{ height: "500px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "YOUR_API_KEY" }} // Replace 'YOUR_API_KEY' with your actual Google Maps API key
          defaultCenter={center}
          defaultZoom={zoom}
        ></GoogleMapReact>
      </div>
    </div>
  );
}

export default App;
