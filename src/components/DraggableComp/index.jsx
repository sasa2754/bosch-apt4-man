import style from './DraggableComp.module.css';
import React from 'react';
import Draggable from 'react-draggable';

export default function DraggableComp({name, gender, image, species}) {
    return (
        <Draggable>
            <div className={style.card}>
                <div>
                    <h1>{name}</h1>
                    <h2>{species}</h2>
                    <p>{gender}</p>
                </div>
                <img src={image} alt={name} width={160} height={"auto"}/>
            </div>
        </Draggable>
    );
}
