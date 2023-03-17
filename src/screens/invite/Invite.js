
import React, { Component } from 'react'
import './Invite.css'

export default class Invite extends Component {
  
  render() {
    return (
      <div className='invite-conteiner'>
        
        <div className='invite-texto'>
          <h1 className='invite-h1'>Participe deste momento tão especial para a nossa comunidade, a festa do Glorioso São José!</h1>
        </div>
        <div className='invite-video'>
          <iframe width="650" height="350" src="https://www.youtube.com/embed/rXRL83o33QY" title="FESTA DE SÃO JOSÉ 2023 - &quot;São José protegei nossas famílias e guiai-nos no caminho da missão!&quot;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='invite-btn'>
          <a href="#Religious">
            <button className='btn-programacao' >Confira a programação da festa</button>
          </a>
          
        </div>


      </div>
    )
  }
}
