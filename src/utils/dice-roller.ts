export const rollDice = (min: number, max: number) => () =>
  min + Math.floor(Math.random() * (max - min + 1));

export type ExplodingRange = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export const validExplodeRange = (value: number): value is ExplodingRange =>
  value <= 10 && value >= 2;

export type DiceResults = {
  sum: number;
  rolls: number[];
};

export const rollDiceWithRolls = (max: number) => (): DiceResults => {
  const roll = rollDice(1, max)();
  return {
    sum: roll,
    rolls: [roll],
  };
};

export const d2 = rollDiceWithRolls(2);
export const d3 = rollDiceWithRolls(3);
export const d5 = rollDiceWithRolls(5);
export const d10 = rollDiceWithRolls(10);
export const d20 = rollDiceWithRolls(20);

const exploding = (
  ed: ExplodingRange = 10,
  rolls: number[] = [],
  sum: number = 0
): DiceResults => {
  const result = d10();
  const newRolls = [...rolls, result.sum];
  const newSum = sum + result.sum;

  if (result.sum < ed) return { sum: newSum, rolls: newRolls };

  return exploding(ed, newRolls, newSum);
};

export const explodingD10 = (ed: ExplodingRange = 10) => exploding(ed);
