import React from 'react'
import "./footer.css"
import facebook from "../assets/images/redes/facebook.png"
import instagram from "../assets/images/redes/instagram.png"
import twitter from "../assets/images/redes/twitter.png"
import tarjetas from "../assets/images/tarjetas/tarjetas.png"
import mp from "../assets/images/tarjetas//mp.png"

export default function Footer() {
    return (
        <footer>
        <div className='redes'>
            <nav className='redes-logos'>
                <p>¡Seguinos en nuestras redes!</p>
                <a href='https://facebook.com'> <img src={facebook} width={30} height={30} /></a>
                <a href='http://www.instagram.com'> <img src={instagram} width={25} height={27} /></a>
                <a href='https://twitter.com'> <img src={twitter} width={25} height={25} /></a>
            </nav>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26240.402287827314!2d-58.294037834712604!3d-34.70391158535722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a331fdc70bdd5d%3A0x6c702cf3f15dabac!2sBernal%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1696457304454!5m2!1ses!2sar" className='mapa-footer' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            
        </div>
            <div  className='mediodepago'>
                <img src={tarjetas} width={150} height={50}/> <img src={mp} width={150} height={50}/>
            </div>  
        </footer>
    )
}


// export default function Footer() {

//     const [redes, setRedes] = useState();
//     console.log(redes)

//     const Redes = () =>{
//         return new Promise((resolve, reject) =>{
//             resolve(imgredes)
//         })
//     }

//     useEffect(() => {
//         Redes()
//             .then((res) =>{
//                 setRedes(res)
//             })

//     }, [])


// // //     return (
// // //         <div>
// // //             {redes.length > 0 && redes[0].img}
// // //         </div>
// // //     )
// }
