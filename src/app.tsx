import React from 'react';
import Cont1 from './ContentType';
import Cont2 from './ContentType2';
import Cont3 from './ContentType3';
import Cont4 from './ContentType4';
import card1Content1 from '../static/card1Content1';
import card1Content2 from '../static/card1Content2';
import card2Content1 from '../static/card2Content1';
import card2Content2 from '../static/card2Content2';
import './app.css';

const App: React.FC = () => {
  return (
    <div>
      <div id="card1">
        <Cont1 cardContent={card1Content1}></Cont1>
        <Cont2 cardContent={card1Content2}></Cont2>
      </div>
      <div id="card2">
        <Cont3 cardContent={card2Content1}></Cont3>
        <Cont4 cardContent={card2Content2}></Cont4>
      </div>
      <div id="arrowdot"></div>
      <div id="vertical"></div>
    </div>
  );
};

export default App;
