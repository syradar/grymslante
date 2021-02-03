export enum TransportSpeed {
  Foot = 'Foot',
  Wagon = 'Wagon',
  Horse = 'Horse',
  Boat = 'Boat',
}

type TransportSpeeds = {
  [MOT in keyof typeof TransportSpeed]: number;
};

export enum TravelSpeed {
  WalkInShadows = 'WalkInShadows',
  Slow = 'Slow',
  Normal = 'Normal',
  Fast = 'Fast',
  Quick = 'Quick',
}

type TravelSpeeds = {
  [TS in keyof typeof TravelSpeed]: number;
};

export enum Landscape {
  Plains = 'Plains',
  LightlyHilly = 'LightlyHilly',
  Hilly = 'Hilly',
  Mountainous = 'Mountainous',
}

type Landscapes = {
  [L in keyof typeof Landscape]: number;
};

export enum Terrain {
  Road = 'Road',
  Grass = 'Grass',
  GrassHigh = 'GrassHigh',
  Forest = 'Forest',
  ForestThick = 'ForestThick',
  CityEmpty = 'CityEmpty',
  CityNormal = 'CityNormal',
  CityCrowd = 'CityCrowd',
  VillageEmpty = 'VillageEmpty',
  VillageNormal = 'VillageNormal',
  VillageCrowd = 'VillageCrowd',
}

type Terrains = {
  [T in keyof typeof Terrain]: number;
};

export enum Passability {
  Normal = 'Normal',
  SomewhatDifficult = 'SomewhatDifficult',
  Difficult = 'Difficult',
  VeryDifficult = 'VeryDifficult',
  ExtremelyDifficult = 'ExtremelyDifficult',
}

type Passabilities = {
  [P in keyof typeof Passability]: number;
};

export enum Weather {
  Normal = 'Normal',
  Rain = 'Rain',
  HeavyRain = 'HeavyRain',
  Snowing = 'Snowing',
  Blizzard = 'Blizzard',
  SnowLittle = 'SnowLittle',
  Snow = 'Snow',
  SnowMuch = 'SnowMuch',
}

type Weathers = {
  [W in keyof typeof Weather]: number;
};

const transportSpeeds: TransportSpeeds = {
  Foot: 5,
  Wagon: 15,
  Horse: 20,
  Boat: 15,
};

const travelSpeeds: TravelSpeeds = {
  WalkInShadows: 0.2,
  Slow: 0.75,
  Normal: 1,
  Fast: 1.5,
  Quick: 2,
};

const landscapes: Landscapes = {
  Plains: 1,
  LightlyHilly: 0.75,
  Hilly: 0.5,
  Mountainous: 0.3,
};

const terrains: Terrains = {
  Road: 1,
  Grass: 0.8,
  GrassHigh: 0.75,
  Forest: 0.5,
  ForestThick: 0.25,
  CityEmpty: 0.75,
  CityNormal: 0.5,
  CityCrowd: 0.25,
  VillageEmpty: 1,
  VillageNormal: 0.75,
  VillageCrowd: 0.5,
};

const passabilities: Passabilities = {
  Normal: 1,
  SomewhatDifficult: 0.8,
  Difficult: 0.6,
  VeryDifficult: 0.3,
  ExtremelyDifficult: 0.1,
};

const weathers: Weathers = {
  Normal: 1,
  Rain: 0.9,
  HeavyRain: 0.75,
  Snowing: 0.8,
  Blizzard: 0.5,
  SnowLittle: 0.75,
  Snow: 0.5,
  SnowMuch: 0.3,
};

export interface TravelTimeOptions {
  travelTimePerDay?: number;
  transportSpeed: TransportSpeed;
  travelSpeed: TravelSpeed;
  landscape: Landscape;
  terrain: Terrain;
  passability: Passability;
  weather: Weather;
}

export interface TravelTimeResults {
  hours: number;
  travelDays: number;
}

/**
 *
 * @param travelTimePerDay How much per day of actual traveling. Defaults to 8
 */
export const getTravelTime = ({
  travelTimePerDay = 8,
  transportSpeed,
  travelSpeed,
  landscape,
  terrain,
  passability,
  weather,
}: TravelTimeOptions) => (distanceInKm: number): TravelTimeResults => {
  // Stupid division maths makes this so much harder to
  // reason about.
  const timeInHours =
    distanceInKm /
    transportSpeeds[transportSpeed] /
    travelSpeeds[travelSpeed] /
    landscapes[landscape] /
    terrains[terrain] /
    passabilities[passability] /
    weathers[weather];

  return {
    hours: timeInHours,
    travelDays: timeInHours / travelTimePerDay,
  };
};

// getTravelTime(TransportSpeed.Foot, TravelSpeed.Normal)(30);

// export function se() {
//   function c() {
//     function b() {
//       c = h;
//       z(p, function (a) {
//         c /= a;
//       });
//       a = c / (e ? 24 : 6);
//       s.textContent = c.toFixed(2) + ' timmar – ' + a.toFixed(2) + ' dagar';
//       d[r] = a;
//       g[r] = c;
//       c = a = 0;
//       z(d, function (b, d) {
//         a += b;
//         c += g[d];
//       });
//       k.nodeValue = c.toFixed(2) + ' timmar – ' + a.toFixed(2) + ' dagar';
//       var a, c;
//     }
//     function c(a, d) {
//       f = p.length;
//       Ya(t, a, d, f ? 1 : 5, function (a) {
//         a || ((e = !a) && (a = 15));
//         p[f] = a;
//         b();
//       });
//       p[f] = 1;
//       var f;
//     }
//     h = 1;
//     p = [];
//     t = a(0, 'class', 'panel_box');

//     c('Färdsätt', [
//       [5, 'till fots'],
//       [15, 'häst och vagn'],
//       [20, 'häst'],
//       [0, 'båt'],
//     ]);
//     c('Hastighet', [
//       [0.2, 'dold förflyttning'],
//       [0.75, 'långsam'],
//       [1, 'normal'],
//       [1.5, 'snabb'],
//       [2, 'mycket snabb'],
//     ]);
//     c('Landskap', [
//       [1, 'slätt'],
//       [0.75, 'lätt kuperat'],
//       [0.5, 'kuperat'],
//       [0.3, 'bergigt'],
//     ]);
//     c('Terräng', [
//       [1, 'väg'],
//       [0.8, 'gräs'],
//       [0.75, 'högt gräs'],
//       [0.5, 'skog'],
//       [0.25, 'tät skog'],
//       [0.25, 'stad (folkmassa)'],
//       [0.5, 'stad (normal)'],
//       [0.75, 'stad (folktomt)'],
//       [0.5, 'by (folkmassa)'],
//       [0.75, 'by (normal)'],
//       [1, 'by (folktomt)'],
//     ]);
//     c('Framkomlighet', [
//       [1, 'normal'],
//       [0.8, 'något svår'],
//       [0.6, 'svår'],
//       [0.3, 'mycket svår'],
//       [0.1, 'extremt svår'],
//     ]);
//     c('Väderförhållande', [
//       [1, 'normal'],
//       [0.9, 'regn'],
//       [0.75, 'mycket regn'],
//       [0.8, 'lite snöigt'],
//       [0.5, 'mycket snöigt'],
//       [0.75, 'lite snö'],
//       [0.5, 'snö'],
//       [0.3, 'mycket snö'],
//     ]);
//     p[0] = 5;
//     s = tb(t, 'Restid');
//     r = d.length;
//     b();
//     Qb(
//       f,
//       'Etapp ' + (r + 1),
//       function () {
//         return t;
//       },
//       1
//     );
//     var e, h, p, r, s, t;
//   }
//   d = [];
//   g = [];
//   f = a();
//   h = b(a(0, 'class', 'panel_body_dark'), f);
//   nb(h);
//   dc(h, 'Lägg till etapp', c);
//   k = tb(h, 'Totalt');
//   c();
//   b(
//     ka,
//     b(
//       a(0, 'class', 'panel'),
//       b(
//         a(0, 'class', 'panel_head'),
//         b(a(0, 'class', 'panel_title'), e('Restid'))
//       ),
//       h
//     )
//   );
//   var d, g, f, h, k;
// }
