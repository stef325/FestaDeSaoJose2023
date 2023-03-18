import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Religious.css';
import SlideItem from '../../../components/slideItem/SlideItem';
import ProgrmTextBlock from '../../../components/progrmTextBlock/ProgrmTextBlock';
import ProgrmItem from '../../../components/progrmItem/ProgrmItem';

export default class Religious extends Component {
  descricoes = {
    sab11: "11/03 - Sábado - Abertura da festa",
    dom12: "12/03 - Domingo",
    seg13: "13/03 - Segunda",
    ter14: "14/03 - Terça",
    qua15: "15/03 - Quarta",
    qui16: "16/03 - Quinta",
    sex17: "17/03 - Sexta",
    sab18: "18/03 - Sábado",
    dom19: "19/03 - Domingo - Encerramento da festa"
  }

  render() {
    return (
      <div className='religious-container'>
        <h1 id='Religious'>Programação Religiosa</h1>

        <div className='religious-carousel'>
          <Carousel>



            <SlideItem slideTitle={this.descricoes.sab11} dia="sab-11">

              <div className='pgrm-conteiner'>

                <ProgrmTextBlock
                  minMusica="Ministério de Música São José"
                  dedicado="ECC e Pastoral Familiar"
                >
                  <ProgrmItem description="18h - Carreata saindo do portal da cidade"></ProgrmItem>
                  <ProgrmItem description="19h - Solenidade de abertura da festa"></ProgrmItem>
                </ProgrmTextBlock>
                <div className='padre-progrm'>
                  <img src="./FestaDeSaoJose2023/img/peJoselito.jpg" alt="" className='img-padre' />
                  <div className='pgrm-padre'>
                    <h2>Pres. da celebração: </h2>
                    <h2>Pe. Joselito Ferreira da Silva</h2>
                  </div>
                </div>
              </div>

            </SlideItem>



            <SlideItem slideTitle={this.descricoes.dom12} dia="dom-12">
              <div className='pgrm-conteiner'>
                <ProgrmTextBlock
                  minMusica="Seminaristas"
                  dedicado="Poderes Executivo, Legislativo e Comerciantes"
                >
                  <ProgrmItem description="19h - Santa Missa"></ProgrmItem>
                </ProgrmTextBlock>
                <div className='padre-progrm'>
                  <img src="./FestaDeSaoJose2023/img/peLeandro.jpg" alt="" className='img-padre' />
                  <div className='pgrm-padre'>
                    <h2>Pres. da celebração: </h2>
                    <h2>Pe. Leandro Márcio</h2>
                  </div>
                </div>
              </div>

            </SlideItem>



            <SlideItem slideTitle={this.descricoes.seg13} dia="seg-13">
              <div className='pgrm-conteiner'>
                <ProgrmTextBlock
                  minMusica="Coral Pequenos Cantores"
                  dedicado="Secretaria de Saúde"
                >
                  <ProgrmItem description="19h - Santa Missa"></ProgrmItem>
                </ProgrmTextBlock>

                <div className='padre-progrm'>
                  <img src="./FestaDeSaoJose2023/img/peMarcondes.jpg" alt="" className='img-padre' />
                  <div className='pgrm-padre'>
                    <h2>Pres. da celebração: </h2>
                    <h2>Pe. Marcondes</h2>
                  </div>
                </div>
              </div>
            </SlideItem>



            <SlideItem slideTitle={this.descricoes.ter14} dia="ter-14">
              <div className='program2'>
                <div className='parte-de-cima'>
                  <div className='progrm-terca'>
                    <ProgrmItem description="9h - Santa Missa com os Idosos"></ProgrmItem>
                  <ProgrmItem description="Animação: Ministério de Música São José"></ProgrmItem>
                  </div>
                  
                  <div className='padre-progrm'>
                    <img src="./FestaDeSaoJose2023/img/peJoselito.jpg" alt="" className='img-padre-terca' />
                    <div className='pgrm-padre'>
                      <h2>Pres. da celebração: </h2>
                      <h2>Pe. Joselito Ferreira da Silva</h2>
                    </div>
                  </div>
                </div>

                <div className='parte-baixo'>
                  <ProgrmTextBlock
                    minMusica="Ministério de Música Santa Cecília (Caraúbas)"
                    dedicado="Secretaria de Ação Social"
                  >
                    <ProgrmItem description="19h - Santa Missa"></ProgrmItem>
                  </ProgrmTextBlock>

                  <div className='padre-progrm'>
                    <img src="./FestaDeSaoJose2023/img/peSaulo.jpg" alt="" className='img-padre-terca' />
                    <div className='pgrm-padre'>
                      <h2>Pres. da celebração: </h2>
                      <h2>Pe. Saulo</h2>
                    </div>
                  </div>
                </div>




              </div>

            </SlideItem>



            <SlideItem slideTitle={this.descricoes.qua15} dia="qua-15">
              <div className='pgrm-conteiner'>
                <ProgrmTextBlock
                  minMusica="Comunidade Ignis (Serra Branca)"
                  dedicado="Secretaria de Educação"
                >
                  <ProgrmItem description="19h - Santa Missa"></ProgrmItem>
                </ProgrmTextBlock>
                <div className='padre-progrm'>
                  <img src="./FestaDeSaoJose2023/img/peDanilo.jpg" alt="" className='img-padre' />
                  <div className='pgrm-padre'>
                    <h2>Pres. da celebração: </h2>
                    <h2>Pe. Danilo César</h2>
                  </div>
                </div>
              </div>
            </SlideItem>



            <SlideItem slideTitle={this.descricoes.qui16} dia="qui-16">
              <div className='pgrm-conteiner'>
                <ProgrmTextBlock
                  minMusica="Ministério de Música Netos de Sant'Ana (Congo)"
                  dedicado="Comunidades Rurais"
                >
                  <ProgrmItem description="19h - Santa Missa"></ProgrmItem>
                </ProgrmTextBlock>
                <div className='padre-progrm'>
                  <img src="./FestaDeSaoJose2023/img/peTadeu.png" alt="" className='img-padre' />
                  <div className='pgrm-padre'>
                    <h2>Pres. da celebração: </h2>
                    <h2>Pe. Tadeu Laurentino</h2>
                  </div>
                </div>
              </div>
            </SlideItem>



            <SlideItem slideTitle={this.descricoes.sex17} dia="sex-17">
              <div className='pgrm-conteiner'>
                <div className='program-dom-dulcenio'>
                  <ProgrmItem description="19h - Santa Missa"></ProgrmItem>
                <ProgrmItem description="Animação: Ministério de Música São José"></ProgrmItem>
                </div>
                
                <div className='padre-progrm'>
                  <img src="./FestaDeSaoJose2023/img/domDulcenio.png" alt="" className='img-padre' />
                  <div className='pgrm-dom-dulcenio'>
                    <h2>Pres. da celebração: </h2>
                    <h2>Dom Dulcenio Fontes de Matos</h2>
                  </div>
                </div>
              </div>
            </SlideItem>



            <SlideItem slideTitle={this.descricoes.sab18} dia="sab-18">
              <div className='pgrm-conteiner'>
                <ProgrmTextBlock
                  minMusica="Juventude"
                  dedicado="Juventude e Filhos ausentes"
                >
                  <ProgrmItem description="16h - Casamento"></ProgrmItem>
                  <ProgrmItem description="19h - Santa Missa"></ProgrmItem>
                </ProgrmTextBlock>
                <div className='padre-progrm'>
                  <img src="./FestaDeSaoJose2023/img/peJoseque.png" alt="" className='img-padre' />
                  <div className='pgrm-padre'>
                    <h2>Pres. da celebração: </h2>
                    <h2>Pe. Joseque Borges</h2>
                  </div>
                </div>
              </div>
            </SlideItem>



            <SlideItem slideTitle={this.descricoes.dom19} dia="dom-19">
              <div className='pgrm-conteiner'>
                <ProgrmTextBlock
                  minMusica="Ministério de Música São José"
                  dedicado="Agricultores, todas as pastorais e movimentos"
                >
                  <ProgrmItem description="16h - Concentração em frente a Igreja do Sagrado Coração de Jesus"></ProgrmItem>
                  <ProgrmItem description="17h -Missa Solene de Encerramento"></ProgrmItem>
                </ProgrmTextBlock>
                <div className='padre-progrm'>
                  <img src="./FestaDeSaoJose2023/img/peJoselito.jpg" alt="" className='img-padre' />
                  <div className='pgrm-padre'>
                    <h2>Pres. da celebração: </h2>
                    <h2>Pe. Joselito Ferreira da Silva</h2>
                  </div>
                </div>
              </div>
            </SlideItem>
          </Carousel>
        </div>

      </div>
    )
  }
}
