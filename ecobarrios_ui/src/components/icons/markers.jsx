import L from "leaflet";
import "leaflet.awesome-markers";

export const greenMarker = L.AwesomeMarkers.icon({
  icon: "users",
  markerColor: "green",   // red, blue, orange, green, purple, darkred, cadetblue
  prefix: "fa",           // usa FontAwesome
});
