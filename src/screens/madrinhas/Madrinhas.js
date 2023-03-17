import React, { Component } from 'react'
import './Madrinhas.css'
import MadrinhaComp from '../../components/madrinha/MadrinhaComp'

export default class Madrinhas extends Component {
    render() {
        return (
            <div className='madrinhas-container'>
                <hr />
                <h1>Madrinhas da Festa</h1>
                <div className='madrinhas'>
                    <MadrinhaComp nome="Gloritônia" image="toninha.jpg"></MadrinhaComp>
                    <MadrinhaComp nome="Emídia" image="emidia.jpg"></MadrinhaComp>
                    <MadrinhaComp nome="Maria" image="maria.jpg"></MadrinhaComp>
                </div>
                <hr />


            </div>
        )
    }
}
