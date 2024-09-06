import { useState } from "react"
import ModalApi from "../ModalApi"
import style from "./CardApi.module.css"
import { Tilt } from 'react-tilt'
const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 30,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.02,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


export default function CardApi({ name, gender, image, species, type, status }) {
    const [visible, setVisible] = useState(false);

    const clickHandler = () => {
        setVisible(!visible);
    }

    return (
        <>
            <div>
                <ModalApi
                    item={undefined}
                    visible={visible}
                    name={name}
                    species={species}
                    gender={gender}
                    image={image}
                    type={type}
                    status={status}
                />

                <Tilt options={defaultOptions}>
                    <div className={style.card} onClick={clickHandler}>
                        <div>
                            <h1>{name}</h1>
                            <h2>{species}</h2>
                            <p>{gender}</p>
                            <p>{status}</p>
                            <p>{type}</p>
                        </div>
                        <img src={image} alt={name} width={160} height={"auto"} />
                    </div>
                </Tilt>
            </div>
        </>
    )
}