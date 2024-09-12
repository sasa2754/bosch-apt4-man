import produtos from '../src/constants/produtos.json'
import style from './App.module.css'
import Card from '../src/components/CardProducts'
import { App } from './App'


function Produtos() {
  return (
    <div className={style.wrapPage}>
    <App />
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
    </div>
      
  ) 
}

export default Produtos
