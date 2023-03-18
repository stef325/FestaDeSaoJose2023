import React, { Component } from 'react'
import Partner from '../../components/partner/Partner'
import Partners from '../../components/partner/partners'
import './PartnerShip.css'


export default class PartnerShip extends Component {
  partners = [
    {
      link: 'arydoscorreios.png'
    },
    {
      link: 'anonimos.png'
    },
    {
      link: 'farmaciasideal.png'
    },
    {
      link: 'florisamodas.png'
    },
    {
      link: 'professoramikaely.png'
    },
    {
      link: 'ricardoautomoveis.png'
    }

  ]

  render() {
    return (
      <div className='partners-container'>
        <h1 id='Religious'>Parceiros</h1>
        <div className='slider-p'>
          <Partners partners={this.partners}></Partners>
        </div>

        <br />
        <div>
          <h2>Para se tornar um patrocinador, entre em contato pelo Instagram da PASCOM!</h2>
          <br />
          <br />
          <h2>Para contribuições de qualquer valor, escaneie o QR code abaixo</h2>
          <img src="./FestaDeSaoJose2023/img/qrcodecont.png" alt="" />
          <hr  className='linehr'/>
          
        </div>

        


        <div></div>


      </div>
    )
  }
}
