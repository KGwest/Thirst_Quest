const globe = Globe()
  (document.getElementById("globeViz"))
  .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
  .backgroundImageUrl("//unpkg.com/three-globe/example/img/night-sky.png")
  .pointLat("lat")
  .pointLng("lng")
  .pointColor(() => "#ffd800") // charity: water yellow
  .pointAltitude(0.02)
  .pointRadius(0.5)
  .pointLabel("label");

const waterImpactPoints = [
  // 🌍 Africa
  { lat: 1.3733, lng: 32.2903, label: "Uganda: Well restorations" },
  { lat: 9.082, lng: 8.6753, label: "Nigeria: Solar pump systems" },
  { lat: -1.9403, lng: 29.8739, label: "Rwanda: Rainwater collection" },
  { lat: 14.4974, lng: -14.4524, label: "Senegal: Gravity-fed tap stands" },
  { lat: 12.2383, lng: -1.5616, label: "Burkina Faso: Drilled wells" },
  { lat: -13.2543, lng: 34.3015, label: "Malawi: Borehole construction" },
  { lat: 31.7917, lng: -7.0926, label: "Morocco: Mountain spring catchments" },
  { lat: 6.5244, lng: 3.3792, label: "Lagos, Nigeria: Maintenance training" },

  // 🌏 Asia
  { lat: 23.685, lng: 90.3563, label: "Bangladesh: Deep tube wells" },
  { lat: 35.8617, lng: 104.1954, label: "China: Safe storage tanks" },
  { lat: 3.2028, lng: 73.2207, label: "Maldives: Water purification tanks" },
  { lat: 34.8021, lng: 38.9968, label: "Syria: Emergency water trucking" },
  { lat: 15.8700, lng: 100.9925, label: "Thailand: Water education campaigns" },

  // 🌎 South America
  { lat: 4.5709, lng: -74.2973, label: "Colombia: Filter distribution" },
  { lat: -9.19, lng: -75.0152, label: "Peru: Spring protection & filtration" },
  { lat: -16.2902, lng: -63.5887, label: "Bolivia: Gravity-fed tap systems" },

  // 🌎 Central America
  { lat: 13.1939, lng: -85.9994, label: "Nicaragua: Community well drilling" },
  { lat: 14.6349, lng: -90.5069, label: "Guatemala: Gravity-fed piped systems" },
  { lat: 14.0818, lng: -87.2068, label: "Honduras: Household filtration systems" },

  // 🌎 Caribbean
  { lat: 18.7357, lng: -70.1627, label: "Dominican Republic: Piped systems" },
  { lat: 18.9712, lng: -72.2852, label: "Haiti: Biosand filters and spring protection systems help fight waterborne diseases in underserved rural communities." },

  // 🌎 North America
  { lat: 40.7128, lng: -74.0060, label: "USA (New York): charity: water HQ. While their work focuses on developing nations, U.S. supporters have helped fund 100,000+ projects around the world." },

  // 🌍 Europe (no known field projects, but major donor and tech partner region)

  // 🌏 Oceania (no current field projects confirmed)
];


globe.pointsData(waterImpactPoints);
globe.pointOfView({ lat: 0, lng: 0, altitude: 2 });
globe.labelsData(data)
  .labelSize(2.5) // 
  .labelDotRadius(0.8); //
