export type TradeValue = number;

export type CoinTypes = 'gc' | 'sc' | 'cc';

export interface CoinPurse {
  gold: number;
  silver: number;
  copper: number;
}

export interface CoinLabels {
  gc: string;
  sc: string;
  cc: string;
}
