import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const atLeast = (lowest: number) => (value: number) =>
  value < lowest ? lowest : value;

const atLeastOne = atLeast(1);

const getSkillCost = (
  initial: number,
  target: number,
  modifier: number = 0,
  cost: number = 0
): number =>
  initial >= target
    ? cost
    : getSkillCost(
        initial + 1,
        target,
        modifier,
        cost + atLeastOne(initial + 1 + modifier)
      );

function App() {
  const [current, setCurrent] = useState<number>(1);
  const [target, setTarget] = useState<number>(2);
  const [modifier, setModifier] = useState<number>(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Current</h1>
        <div className="stepper">
          <button
            className="dec"
            type="button"
            onClick={() => {
              if (current > 1 ) {
                setCurrent(current - 1);
              }
            }}
          >
            –
          </button>
          <span>{current}</span>
          <button
            className="inc"
            type="button"
            onClick={() =>{
               setCurrent(current + 1);
               if (current + 1 >= target) setTarget(target + 1);
              }}
          >
            +
          </button>
        </div>
        <h1>Target</h1>
        <div className="stepper">
          <button
            className="dec"
            type="button"
            onClick={() => {
              if (target > 2 ) {
                setTarget(target - 1)
                if (target - 1 <= current) setCurrent(current - 1);
              };
            }}
          >
            –
          </button>
          <span>{target}</span>
          <button
            className="inc"
            type="button"
            onClick={() => setTarget(target + 1)}
          >
            +
          </button>
        </div>
        <h1>Modifier</h1>
        <div className="stepper">
          <button
            className="dec"
            type="button"
            onClick={() => setModifier(modifier - 1)}
          >
            –
          </button>
          <span>{modifier}</span>
          <button
            className="inc"
            type="button"
            onClick={() => setModifier(modifier + 1)}
          >
            +
          </button>
        </div>
        <h1>Cost: {getSkillCost(current, target, modifier)}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
