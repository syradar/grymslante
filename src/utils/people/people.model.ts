export enum People {
  Stormlander = 'Stormlander',
  Mittlander = 'Mittlander',
  Westmarkian = 'Westmarkian',
  Dwarven = 'Dwarven',
  Elven = 'Elven',
  Troll = 'Troll',
}

export const isPeople = (str: unknown): str is People =>
  Object.values(People).includes(str as People);
