import './Calculator.css';
import React from 'react';
import { useState } from 'react';
// import calculate from '../logic/calculate';

function Calculator() {

  const [data, update] = useState({
    total: null,
    next: null,
    operation: null,
  });

  update (input) {
    console.log(data);
    console.log(input);
  }

  return (
    <div className="container">
      <div className="result">
        <span id="operator" />
        <span id="result">0</span>
      </div>
      <div className="item"><button type="button" value="AC" className="character" onClick={update('A/C')}>AC</button></div>
      <div className="item"><button type="button" value="+/-" className="character">+/-</button></div>
      <div className="item"><button type="button" value="%" className="character">%</button></div>
      <div className="item operator"><button type="button" value="÷" className="character">÷</button></div>
      <div className="item"><button type="button" value="7" className="character">7</button></div>
      <div className="item"><button type="button" value="8" className="character">8</button></div>
      <div className="item"><button type="button" value="9" className="character">9</button></div>
      <div className="item operator"><button type="button" value="x" className="character">x</button></div>
      <div className="item"><button type="button" value="4" className="character">4</button></div>
      <div className="item"><button type="button" value="5" className="character">5</button></div>
      <div className="item"><button type="button" value="6" className="character">6</button></div>
      <div className="item operator"><button type="button" value="-" className="character">-</button></div>
      <div className="item"><button type="button" value="1" className="character">1</button></div>
      <div className="item"><button type="button" value="2" className="character">2</button></div>
      <div className="item"><button type="button" value="3" className="character">3</button></div>
      <div className="item operator"><button type="button" value="+" className="character">+</button></div>
      <div className="item zero"><button type="button" value="0" className="character">0</button></div>
      <div className="item"><button type="button" value="." className="character">.</button></div>
      <div className="item operator"><button type="button" value="=" className="character">=</button></div>
    </div>
  );
}

export default Calculator;
