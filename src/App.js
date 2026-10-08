import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillingInput bill={bill} setBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did you your Friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillingInput({ bill, setBill }) {
  return (
    <div>
      <label>How much was the Bill?</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(b) => setBill(Number(b.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect, tip }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(p) => onSelect(Number(p.target.value))}
      >
        <option value="0">Dissastified (0%)</option>
        <option value="5">It was Okay (5%)</option>
        <option value="10">It was Good (10%)</option>
        <option value="20">Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay {bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
