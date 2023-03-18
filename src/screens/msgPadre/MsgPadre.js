import React, { Component } from 'react'
import './MsgPadre.css'

export default class MsgPadre extends Component {
    render() {
        return (
            <div className='msg-padre-conteiner'>
                <h1>Olhando para o exemplo de São José, queremos nestes dias de 11 a 19 de Março celebrar a festa de nossa cidade em honra do nosso padroeiro.
                    Com este espírito queremos convidar você e toda sua família para participar deste momento celebrativo, juntamente com todos os fiéis devotos de São José.
                    Invoquemos a intercessão do nosso padroeiro para que proteja nossas famílias e nos guie no caminho da missão.</h1>
                <div>
                <img src="./FestaDeSaoJose2023/img/peJoselito.jpg" alt="" className='img-msg-padre' />
                  <div className='pgrm-padre'>
                    <h2>Pe. Joselito Ferreira da Silva</h2>
                  </div>
                </div>
            </div>
        )
    }
}
