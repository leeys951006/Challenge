import React, { CSSProperties } from 'react';
import Cont1 from './ContentType';
import Cont2 from './ContentType2';
import Cont3 from './ContentType3';
import Cont4 from './ContentType4';
import card1Content1 from '../static/card1Content1';
import card1Content2 from '../static/card1Content2';
import card2Content1 from '../static/card2Content1';
import card2Content2 from '../static/card2Content2';

const App: React.FC = () => {
  const card1Style: CSSProperties = {
    width: '1044px',
    height: '487px',
    backgroundColor: 'whitesmoke',
    position: 'absolute',
    bottom: '15vh',
    left: '5vw',
    opacity: '0.9',
  };

  const card2Style: CSSProperties = {
    width: '1044px',
    height: '487px',
    backgroundColor: 'whitesmoke',
    position: 'relative',
    top: '48vh',
    left: '5vw',
    opacity: '0.9',
  };

  const arrowdot: CSSProperties = {
    width: '23px',
    height: '40px',
    position: 'relative',
    backgroundColor: '#ffb14f',
    top: '18vh',
    left: '37vw',
  };

  const vertical: CSSProperties = {
    width: '10px',
    height: '532px',
    position: 'relative',
    backgroundColor: '#ffb14f',
    bottom: '10vh',
    left: '50vw',
  };
  return (
    <div>
      <div id="card1" style={card1Style}>
        <Cont1 cardContent={card1Content1}></Cont1>
        <Cont2 cardContent={card1Content2}></Cont2>
      </div>
      <div id="card2" style={card2Style}>
        <Cont3 cardContent={card2Content1}></Cont3>
        <Cont4 cardContent={card2Content2}></Cont4>
      </div>
      <div id="arrowdot" style={arrowdot}></div>
      <div id="vertical" style={vertical}></div>
    </div>
  );
};

export default App;
