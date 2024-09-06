import { useState, useEffect } from 'react'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import CardApi from './components/CardApi'
import Card from './components/CardProducts'
import { ToastContainer, toast } from 'react-toastify';
import style from './App.module.css'
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")
  const [showDraggable, setShowDraggable] = useState(0);
  const [dataDraggable, setDataDraggable] = useState("");

  let nome, species, gender, type, status;

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

  // console.log(showDraggable);



  return (
    <>
    <ToastContainer/>
    {/* Header */}
    <div className={style.wrapBtns}> 
      <button onClick={() => setShow("prod")}>Produtos</button>
      <button onClick={() => setShow("api")}>API</button>
      <button onClick={() => setShow("map")}>Mapa</button>
    </div>

    {/* Body */}
    <div className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
     {show === "prod" &&
        <>
          <h2>Showroom de produtos</h2>
          <div className={style.cardBox}>
            {produtos.map((item) => {
              return(
                <>
                  <Card 
                    categoria={item.categoria}
                    desc={item.desc}
                    name={item.name}
                    id={item.id}
                    image={item.image}
                    value={item.value}
                    status={item.status}
                  />
                </>
              )
            })}
          </div>
        </>
      }
     {show === "api" &&

        <>
          <h2>Rick and Morty API</h2>
            <div>
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
               <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className={style.cardBox}>
            {data.map((item, index) => 
              <>
                
                <CardApi key={index} name={item.name} species={item.species} gender={item.gender} image={item.image} type={item.type} status={item.status}/>
              </>
            )}
            </div>
       </>
      }
     {show === "map" &&
        <>
      <h2>Mapa</h2>
          <div>
              mapa aqui
          </div>
         </>
      }
    </div>
    
    </>
  )
}

export default App
