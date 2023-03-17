import React from 'react'
import './MadrinhaComp.css'

export default function MadrinhaComp(props) {
    return (
        <div className='madr-cont'>
            <img src={"/img/madrinhas/"+props.image} alt="" className='img-madrinha' />
            <div className='nome-madrinha'>
                <h2>{props.nome}</h2>
            </div>
        </div>
    )
}
