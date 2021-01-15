const rollDice = (min: number, max: number) => () =>
  min + Math.floor(Math.random() * (max - min + 1));

//const d2 = rollDice(1, 2);
//const d3 = rollDice(1, 3);
//const d5 = rollDice(1, 5);
const d10 = rollDice(1, 10);
//const d20 = rollDice(1, 20);

type ExplodingRange = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const exploding = (ed: ExplodingRange = 10, sum: number = 0): number => {
  const result = d10();
  const newSum = sum + result;

  if (result < ed) return newSum;

  return exploding(ed, newSum);
};

const explodingD10 = (ed: ExplodingRange = 10, modifier: number = 0) =>
  exploding(ed) + modifier;

export const Dice = () => (
  <>
    <p>Check console</p>
    {console.log(explodingD10(7, 3))}
  </>
);
