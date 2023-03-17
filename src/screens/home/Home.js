import React, { Component } from 'react'

import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className='home-conteiner'>
        <div className='img-conteiner'>
          <img src="/img/imgBase.png" alt="" className='img-sao-jose'/>
        </div>
        <div className='home-text-conteiner'>
          <img src="/img/imgTexto.png" alt="" className='img-texto'/>
        </div>
      </div>
    )
  }
}