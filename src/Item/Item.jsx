import React from 'react'
import "./item.css"
import flama from "../components/assets/flame.svg"
import { Link } from 'react-router-dom'

export default function Item( { logos} ) {
    return (
        <div className='logos'>
            <div className='logos-cuerpo'>
            <img src={logos.image} alt="" width={200} height={200} className='logoimg'/>
                <h4 className='titulo'>{logos.title}</h4>
                <Link to={`/item/${logos.id}`} className='btndescuento'> <p> 30% de descuento <img src={flama} alt="llama" width={15} height={15}/> </p> </Link>
            </div>
        </div>
    )
}
