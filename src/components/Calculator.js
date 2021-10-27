import './Calculator.css';
import { useState, React } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [data, setObj] = useState({ total: '0', next: null, operation: null });
  const { total, next, operation } = data;

  const update = (input) => {
    setObj(calculate(data, input));
  };

  return (
    <div className="d-flex w-100 justify-content-evenly">
      <div className="mt-5 w-50 px-5">
        <h1>Let&apos;s do some Math&apos;s</h1>
      </div>
      <div className="d-flex justify-content-center w-50">
        <div className="calculator mt-5">
          <div className="result">
            <span id="result">
              {total}
              {operation}
              {next}
            </span>
          </div>
          <div className="item"><button type="button" value="AC" onClick={() => update('AC')}>AC</button></div>
          <div className="item"><button type="button" value="+/-" onClick={() => update('+/-')}>+/-</button></div>
          <div className="item"><button type="button" value="%" onClick={() => update('%')}>%</button></div>
          <div className="item operator"><button type="button" value="÷" onClick={() => update('÷')}>÷</button></div>
          <div className="item"><button type="button" text="7" value="7" onClick={() => update('7')}>7</button></div>
          <div className="item"><button type="button" value="8" onClick={() => update('8')}>8</button></div>
          <div className="item"><button type="button" value="9" onClick={() => update('9')}>9</button></div>
          <div className="item operator"><button type="button" value="x" onClick={() => update('x')}>x</button></div>
          <div className="item"><button type="button" value="4" onClick={() => update('4')}>4</button></div>
          <div className="item"><button type="button" value="5" onClick={() => update('5')}>5</button></div>
          <div className="item"><button type="button" value="6" onClick={() => update('6')}>6</button></div>
          <div className="item operator"><button type="button" value="-" onClick={() => update('-')}>-</button></div>
          <div className="item"><button type="button" value="1" onClick={() => update('1')}>1</button></div>
          <div className="item"><button type="button" value="2" onClick={() => update('2')}>2</button></div>
          <div className="item"><button type="button" value="3" onClick={() => update('3')}>3</button></div>
          <div className="item operator"><button type="button" value="+" onClick={() => update('+')}>+</button></div>
          <div className="item zero"><button type="button" value="0" onClick={() => update('0')}>0</button></div>
          <div className="item"><button type="button" value="." onClick={() => update('.')}>.</button></div>
          <div className="item operator"><button type="button" value="=" onClick={() => update('=')}>=</button></div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
