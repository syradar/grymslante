export const isNullish = <T>(value: T): value is NonNullable<T> =>
  value === null || value === undefined;

export const isString = (s: unknown): s is string => typeof s === 'string';

export const isNumber = (n: unknown): n is number => typeof n === 'number';
