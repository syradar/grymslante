export const numberAscending = (a: number, b: number) => a - b;
export const numberDescending = (a: number, b: number) => b - a;

export const stringAscending = (a: string, b: string) => b.localeCompare(a);
export const stringDescending = (a: string, b: string) => a.localeCompare(b);
