import { Marker, Popup} from "react-leaflet";
import myMarker from './icons/markers';
import '../styles/components/elements/map.css'


// Diccionario para desambiguar el estado de consolidación de los ecobarrios
const consolidationStatus = {
  "No participó en Sendero Ecobarrio" : "gray",
  "Semilla" : "orange",
  "Emergente" : "darkred",
  "En Consolidación" : "green",
  "Referente" : "darkblue"
}

function MarkerComp({ e, onSelect}){
    return(
        <Marker icon= {myMarker(consolidationStatus[e.sendero_ecobarrio])} position={[e.lat, e.lon]} key={e.id} eventHandlers={{click: () => onSelect({e}),
        mouseover: (e) => e.target.openPopup(),
        mouseout: (e) => e.target.closePopup(),}}>
                      <Popup>
                        <div>
                          <h3>{e.nombre}</h3>
                        </div>
                      </Popup>
        </Marker>
    )
}

export default MarkerComp;