const map = L.map('map').setView([-33.45, -70.66], 12);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://carto.com/">CartoDB</a>'
}).addTo(map);


// marcador base

L.circleMarker([-33.45, -70.66], {radius: 10}).addTo(map)
  .openPopup();

