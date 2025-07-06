const globe = Globe()
  (document.getElementById("globeViz"))
  .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
  .backgroundImageUrl("//unpkg.com/three-globe/example/img/night-sky.png")
  .pointLat("lat")
  .pointLng("lng")
  .pointColor(() => "#ffd800") // charity: water yellow
  .pointAltitude(0.02)
  .pointRadius(0.9)
  .pointLabel("label");

// Example data points
const waterImpactPoints = [
  { lat: 23.685, lng: 90.3563, label: "Bangladesh: Deep tube wells" },
  { lat: 1.3733, lng: 32.2903, label: "Uganda: Well restorations " },
  { lat: 9.082, lng: 8.6753, label: "Nigeria: Solar pump systems" },
  { lat: 35.8617, lng: 104.1954, label: "China: Safe storage tanks" },
  { lat: -1.9403, lng: 29.8739, label: "Rwanda: Rainwater collection" },
  { lat: 18.7357, lng: -70.1627, label: "Dominican Republic: Piped systems" }
];

globe.pointsData(waterImpactPoints);

