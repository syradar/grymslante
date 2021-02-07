import { M } from 'rambda/_ts-toolbelt/src/ts-toolbelt';
import { rollDice } from '../dice-roller';
import { NameGeneratorResource } from '../names/names.model';
import { People } from '../people/people.model';
import { choice, range } from '../utils';

export interface Village {
  name: string[];
  people: People;
  population: number;
  merchants: AvailableMerchants;
}

interface GetVillageOptions {
  villageNamesJSON: NameGeneratorResource;
  people: People;
}

export const getVillage = ({ people, villageNamesJSON }: GetVillageOptions) => {
  const population = rollDice(20, 1000)();

  return {
    name: [choice(villageNamesJSON.prefix), choice(villageNamesJSON.suffix)],
    people,
    population,
    merchants: getAvailableMerchants(population),
  };
};

type SupportValue = number;

interface MerchantInfo {
  name: string;
  type: Merchant;
}

enum Merchant {
  Shoemaker = 'Shoemaker',
  Furriers = 'Furriers',
}

type SupportedMerchants = {
  [M in Merchant]: SupportValue;
};

const merchantsSupported: SupportedMerchants = {
  Shoemaker: 150,
  Furriers: 250,
};

//   { type: Merchant.Shoemaker, sv: 150 },
//   { type: Merchant.Furriers, sv: 250 },
// ];

type AvailableMerchants = {
  [M in Merchant]: MerchantInfo[];
};

const getAvailableMerchants = (population: number): AvailableMerchants => {
  return {
    Shoemaker: range(
      Math.floor(population / merchantsSupported.Shoemaker)
    ).map((num) => ({ name: 'Shoemaker', type: Merchant.Shoemaker })),
    Furriers: range(
      Math.floor(population / merchantsSupported.Furriers)
    ).map((num) => ({ name: 'Furriers', type: Merchant.Furriers })),
  };
};
