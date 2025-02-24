import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React, { useEffect } from "react";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Custom icon URL
  iconSize: [40, 40], // Size of icon
  iconAnchor: [20, 40], // Anchor point
  popupAnchor: [0, -35], // Popup position
});

const MyMap = () => {
  useEffect(() => {
    // Leaflet watermark remove karne ke liye
    document.querySelector(".leaflet-control-attribution")?.remove();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <MapContainer center={[33.6844, 73.0479]} zoom={12} zoomControl={false} style={{ height: "600px", width: "100%", borderRadius: "15px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2) " }}>
        {/* Dark Theme Tile */}
        <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
        
        {/* Custom Marker */}
        <Marker position={[33.6844, 73.0479]} icon={customIcon}>
          <Popup>
            <b style={{ fontSize: "16px", color: "#1e90ff" }}>Islamabad, Pakistan</b> <br /> A beautiful city!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMap;
