import React from 'react'
import Card from "./Card"

import fawnalogo from "../assets/images/logos/fawna.png"
import monamilogo from "../assets/images/logos/monami.png"
import excelentlogo from "../assets/images/logos/excelent.png"
import oldprincelogo from "../assets/images/logos/oldprince.png"
import royalcaninlogo from "../assets/images/logos/Royal-Canin-Logo.png"
import vitalcanlogo from "../assets/images/logos/vitalcan.png"

const cards = 
    [{
        id: 1,
        title: '',
        image: fawnalogo,
        url: ""
    },{
        id: 2,
        title: '',
        image: monamilogo,
        url : ""
    },{
        id: 3,
        title: '',
        image: excelentlogo,
        url: ""
    },{
        id: 4,
        title: '',
        image: oldprincelogo,
        url: ""
    },{
        id: 5,
        title: '',
        image: royalcaninlogo,
        url: ""
    },{
        id: 6,
        title: '',
        image: vitalcanlogo,
        url: ""
    }]

export default function Cards() {
    return (
        <div className='container d-flex justify-content-center h-100 align-items-center cardcontainer'>
            <div className="row cardscontainer">
                {
                    cards.map(card => (
                        <div className='col-md-4' key={card.id}>
                            <Card title={card.title} imagen={card.image} url={card.url} text={card.text}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
