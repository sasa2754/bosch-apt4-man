import style from "./CardApi.module.css"

export default function CardApi({name, gender, image, species}) {
    return (
        <div className={style.card}>
            <div>
                <h1>{name}</h1>
                <h2>{species}</h2>
                <p>{gender}</p>
            </div>
            <img src={image} alt={name} width={160} height={"auto"}/>
        </div>
    )
}