import style from './App.module.css'

export const App = () => {
  return (
    <>
      <div className={style.wrapBtns}> 
        <a href="/Produtos"><button className={style.botaozinho}>Produtos</button></a>
        <a href="/Api"><button className={style.botaozinho}>API</button></a>
        <a href="/Mapa"><button className={style.botaozinho}>Mapa</button></a>
        <a href="/Grafico"><button className={style.botaozinho}>Gráfico</button></a>
      </div>
    </>
  )
}
