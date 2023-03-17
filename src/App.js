import Home from './screens/home/Home';
import Invite from './screens/invite/Invite';
import Theme from './screens/theme/Theme';
import Program from './screens/programacao/Program';
import MsgPadre from './screens/msgPadre/MsgPadre';
import SocialMedia from './screens/socialMedia/SocialMedia';
import Madrinhas from './screens/madrinhas/Madrinhas';
import Apoio from './screens/apoio/Apoio';
import PartnerShip from './screens/patrocinadores/PartnerShip';



import './App.css';

function App() {
  return (
    <div className="App">
      <div className='principal-conteiner'>
        <Home></Home>
        <Invite></Invite>
        <Theme></Theme>
        <Program></Program>
        <SocialMedia></SocialMedia>
        <MsgPadre></MsgPadre>
        <Madrinhas></Madrinhas>
        <Apoio></Apoio>
        <PartnerShip></PartnerShip>
        
        <div className='footer-pg'><h1>COMUNIDADE SÃO JOSÉ - COXIXOLA PB</h1></div>
      </div>
    </div>
  );
}

export default App;