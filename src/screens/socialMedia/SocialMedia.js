import React, { Component } from 'react'
import './SocialMedia.css'

export default class SocialMedia extends Component {
  render() {
    return (
      <div className='SocialMedia'>

        <div className='social-header'>
            <h1 className='social-title'>Acompanhe tudo sobre a festa  a partir das nossas redes sociais!</h1>

            <div className='redes'>
              <a href="https://www.youtube.com/@PascomCoxixola" target="_blank"><button className='btn-sm yt'>YOUTUBE</button></a>
              <a href="https://www.facebook.com/pascomcoxixola/" target="_blank"><button className='btn-sm face'>FACEBOOK</button></a>
              <a href="https://www.instagram.com/pascomcoxixola/" target="_blank"><button className='btn-sm insta'>INSTAGRAM</button></a>

            </div>
        </div>
        

      </div>
    )
  }
}
