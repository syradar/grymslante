import { compose } from 'rambda';
import { CoinPurse, CoinLabels, TradeValue } from './coin.model';

export const tradeValueToCoinPurse = (tv: TradeValue): CoinPurse => ({
  gold: Math.floor(tv / 1000),
  silver: Math.floor((tv % 1000) / 100),
  copper: (tv % 1000) % 100,
});

export const coinPurseToTradeValue = ({
  gold,
  silver,
  copper,
}: CoinPurse): TradeValue => gold * 1000 + silver * 100 + copper;

// TODO: Make generic?
const coinsOrEmptyArray = (x: number, c: string) =>
  x > 0 ? [`${x} ${c}`] : [];

export const formatCoinPurse = ({ gc, sc, cc }: CoinLabels) => ({
  gold,
  silver,
  copper,
}: CoinPurse): string =>
  [
    ...coinsOrEmptyArray(gold, gc),
    ...coinsOrEmptyArray(silver, sc),
    ...coinsOrEmptyArray(copper, cc),
  ].join(' ');

export const tvToFormattedCoins = (coinLabels: CoinLabels) =>
  compose(formatCoinPurse(coinLabels), tradeValueToCoinPurse);
