export const isNotNullish = <T>(value: T): value is NonNullable<T> =>
  value !== null && typeof value !== 'undefined';

export const isString = (s: unknown): s is string => typeof s === 'string';

export const isNumber = (n: unknown): n is number => typeof n === 'number';
