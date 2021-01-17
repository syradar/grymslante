export const rollDice = (min: number, max: number) => () =>
  min + Math.floor(Math.random() * (max - min + 1));

export const d2 = rollDice(1, 2);
export const d3 = rollDice(1, 3);
export const d5 = rollDice(1, 5);
export const d10 = rollDice(1, 10);
export const d20 = rollDice(1, 20);

export type ExplodingRange = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export const validExplodeRange = (value: number): value is ExplodingRange => value <= 10 && value >= 2;

const exploding = (ed: ExplodingRange = 10, sum: number = 0): number => {
  const result = d10();
  const newSum = sum + result;

  if (result < ed) return newSum;

  return exploding(ed, newSum);
};

export const explodingD10 = (ed: ExplodingRange = 10) =>
  exploding(ed);