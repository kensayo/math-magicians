import './Calculator.css';

function Item(item) {
  return (
    <div>{item}</div>
  );
}

function Calculator() {
  return (
    <div className="container">
      <div className="result">NaN</div>
      <Item item="AC" />
    </div>
  );
}

export default Calculator;
