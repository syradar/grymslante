import { rollDice } from './dice-roller';

export const capitalize = (s: string) =>
  s[0].toUpperCase() + s.slice(1).toLowerCase();

export const choice = (names: string[]): string => {
  const randomNumber = rollDice(0, names.length - 1)();
  return names[randomNumber];
};

export const range = (n: number) => Array.from({ length: n }, (_, key) => key);

export const isDevelopment = () => process.env.NODE_ENV === 'development';
