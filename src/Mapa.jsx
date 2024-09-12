import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { App } from './App';
import style from './App.module.css'

function Mapa() {

  return (
    <div className={style.wrapPage}>
    <App />
      <h2>Mapa</h2>
          <MapContainer center={[-25.4248636,-49.2729555]} zoom={13} scrollWheelZoom={false} style={{width: '400px', height: '400px'}}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-25.4248636,-49.2729555]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
        </MapContainer>
    </div>
  )
}

export default Mapa
