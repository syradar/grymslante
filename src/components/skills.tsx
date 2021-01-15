import { useState } from "react";

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

export const Skills = () => {
  const [current, setCurrent] = useState<number>(1);
  const [target, setTarget] = useState<number>(2);
  const [modifier, setModifier] = useState<number>(0);

  return (
    <>
      <h1>Current</h1>
      <div className="stepper">
        <button
          className="dec"
          type="button"
          onClick={() => {
            if (current > 1) {
              setCurrent(current - 1);
            } else {
              setCurrent(1);
            }
          }}
        >
          –
        </button>
        <input
          type="text"
          value={current}
          onChange={(event) => {
            const num = parseInt(event.target.value, 10) || 0;
            console.log("num", num);
            setCurrent(num);

            if (num > 1) {
              if (num >= target) setTarget(num + 1);
            }
          }}
        />
        <button
          className="inc"
          type="button"
          onClick={() => {
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
            if (target > 2) {
              setTarget(target - 1);
              if (target - 1 <= current) setCurrent(current - 1);
            }
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
    </>
  );
};
