import Draggable from 'react-draggable'
import './ModalApi.css'

export default function ModalApi ({name, gender, image, species, type, status, visible}) {
    return (
            <Draggable>
                <div className={`modal ${visible ? "visible" : ""}`}>
                    <div>
                         <h1>{name}</h1>
                        <h2>{species}</h2>
                        <p>{gender}</p>
                        <p>{status}</p>
                        <p>{type}</p>
                    </div>
                    <img src={image} alt={name} width={160} height={"auto"} className='imgModal'/>
                </div>
            </Draggable>
    )
}

