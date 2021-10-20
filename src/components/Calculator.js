import './Calculator.css';
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.data = {
      total: null,
      next: null,
      operation: null,
    };
    this.call = this.call.bind(this);
  }

  call(event) {
    this.data = calculate(this.data, event.target.value);

    if (this.data.operation) {
      document.getElementById('operator').innerHTML = this.data.operation;
    } else {
      document.getElementById('operator').innerHTML = '';
    }
    if (this.data.next) {
      document.getElementById('result').innerHTML = this.data.next;
    } else {
      document.getElementById('result').innerHTML = this.data.total;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="result">
          <span id="operator" />
          <span id="result">0</span>
        </div>
        <div className="item"><button type="button" value="AC" onClick={this.call} className="character">AC</button></div>
        <div className="item"><button type="button" value="+/-" onClick={this.call} className="character">+/-</button></div>
        <div className="item"><button type="button" value="%" onClick={this.call} className="character">%</button></div>
        <div className="item operator"><button type="button" value="÷" onClick={this.call} className="character">÷</button></div>
        <div className="item"><button type="button" value="7" onClick={this.call} className="character">7</button></div>
        <div className="item"><button type="button" value="8" onClick={this.call} className="character">8</button></div>
        <div className="item"><button type="button" value="9" onClick={this.call} className="character">9</button></div>
        <div className="item operator"><button type="button" value="x" onClick={this.call} className="character">x</button></div>
        <div className="item"><button type="button" value="4" onClick={this.call} className="character">4</button></div>
        <div className="item"><button type="button" value="5" onClick={this.call} className="character">5</button></div>
        <div className="item"><button type="button" value="6" onClick={this.call} className="character">6</button></div>
        <div className="item operator"><button type="button" value="-" onClick={this.call} className="character">-</button></div>
        <div className="item"><button type="button" value="1" onClick={this.call} className="character">1</button></div>
        <div className="item"><button type="button" value="2" onClick={this.call} className="character">2</button></div>
        <div className="item"><button type="button" value="3" onClick={this.call} className="character">3</button></div>
        <div className="item operator"><button type="button" value="+" onClick={this.call} className="character">+</button></div>
        <div className="item zero"><button type="button" value="0" onClick={this.call} className="character">0</button></div>
        <div className="item"><button type="button" value="." onClick={this.call} className="character">.</button></div>
        <div className="item operator"><button type="button" value="=" onClick={this.call} className="character">=</button></div>
      </div>
    );
  }
}

export default Calculator;
