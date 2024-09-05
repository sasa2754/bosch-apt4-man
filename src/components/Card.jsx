import style from './Card.module.css'
/* eslint-disable react/prop-types */
export const Card = ({status, name, desc, value, image, categoria, id}) => {

  console.log('Status:', status);
  return(
      <div className={style.card}>
        <div className={status ? style.bolinhaVerde : style.bolinhaVermelha}>.</div>
        <h1>{name}</h1>
        <h2>{desc}</h2>
        <p>{value}</p>
        <img src={image} alt={name} width={150} height={"auto"}/>
      </div>
  )
}