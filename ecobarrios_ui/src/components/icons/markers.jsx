import L from "leaflet";
import "leaflet.awesome-markers";

const myMarker = (color) =>
  L.AwesomeMarkers.icon({
  icon: "users",
  markerColor: color,   // red, blue, orange, green, purple, darkred, cadetblue
  prefix: "fa",           // usa FontAwesome
});

export default myMarker;