import style from './Card.module.css'
/* eslint-disable react/prop-types */
export const Card = (props) => {
  console.log('Status:', props.status);
  return(
      <div className={style.card}>
        <div className={props.status ? style.bolinhaVerde : style.bolinhaVermelha}>.</div>
        <h1>{props.name}</h1>
        <h2>{props.desc}</h2>
        <p>{props.value}</p>
        <img src={props.image} alt={props.name} width={150} height={"auto"}/>
      </div>
  )
}