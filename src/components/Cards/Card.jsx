import React from 'react'
import "./cards.css"
import flame from "../assets/flame.svg"

export default function Card({title, imagen, text, url}) {
    return (
        <div className='card text-center align-items-center h-100' >
            <img src={imagen} alt="logos" width={150} heigt={150} className='imagenes-logo'/>
            <div className='card-body'>
                <h4 className='card-title'>{title}</h4>
                <p className='class-description'>{text}</p>
                <a href={url} className='btn btn-outline-secondary' target='_blank' > 30% de descuento <img src={flame} alt="llama" width={15} height={15} />  </a>
            </div>
        </div>
    )
}