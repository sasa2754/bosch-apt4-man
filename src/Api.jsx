import { useState, useEffect } from 'react'
import { api } from "../src/api/rmApi"
import CardApi from '../src/components/CardApi'
import style from './App.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";
import { App } from './App';



function Api() {

  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")

  useEffect(() => {
    api.get(`/character/?page=${page}&name=${name}`).then((response) => {
      if(!response.data.results){
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if(error.response.status === 404){

        toast("Esta página não contém personagens", {
          position: "top-right",
          pauseOnHover: true,
          draggable: true,
          style: {
            background: "linear-gradient(90deg, rgba(182,18,18,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
            color: "white"
          }
        });

        setData([])
        
      }
      console.error(error)
    })
  }, [page, name]);

  return (
    <div className={style.wrapPage}>
    <App />
    <ToastContainer/>
      <h2>Rick and Morty API</h2>
        <div className={style.inputzinhos}>
            <input type="text" className={style.input} placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
            <input type="text" className={style.input} placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}/>
        </div>
        <div className={style.cardBox}>
        {data.map((item, index) => 
          <>
            <CardApi key={index} name={item.name} species={item.species} gender={item.gender} image={item.image} type={item.type} status={item.status}/>
          </>
        )}
        </div>
    </div>
  )
}

export default Api
