import './Calculator.css';

function Calculator() {
  return (
    <div className="container">
      <div className="result"><span className="character">NaN</span></div>
      <div className="item"><span className="character">AC</span></div>
      <div className="item"><span className="character">+/-</span></div>
      <div className="item"><span className="character">%</span></div>
      <div className="item operator"><span className="character">÷</span></div>
      <div className="item"><span className="character">7</span></div>
      <div className="item"><span className="character">8</span></div>
      <div className="item"><span className="character">9</span></div>
      <div className="item operator"><span className="character">x</span></div>
      <div className="item"><span className="character">4</span></div>
      <div className="item"><span className="character">5</span></div>
      <div className="item"><span className="character">6</span></div>
      <div className="item operator"><span className="character">-</span></div>
      <div className="item"><span className="character">1</span></div>
      <div className="item"><span className="character">3</span></div>
      <div className="item"><span className="character">3</span></div>
      <div className="item operator"><span className="character">+</span></div>
      <div className="item zero"><span className="character">0</span></div>
      <div className="item"><span className="character">.</span></div>
      <div className="item operator"><span className="character">=</span></div>
    </div>
  );
}

export default Calculator;
