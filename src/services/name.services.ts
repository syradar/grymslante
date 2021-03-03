import { ValidLanguage } from '../models/language';
import villageNamesEn from '../data/village-names-en.json';
import villageNamesSv from '../data/village-names-sv.json';
import { capitalize, choice } from '../utils/utils';
import { compose, join } from 'rambda';
import innNamesSv from '../data/inn-names.json';
import { NameGeneratorResource } from '../utils/names/names.model';
import plantNamesSv from '../data/plant-names.json';
import peopleNames from '../data/people-names.json';
import { People } from '../utils/people/people.model';

export type NameGeneratorTypes = 'People' | 'Inns' | 'Villages' | 'Plants';

export const joinAndCap = (lang: ValidLanguage) =>
  compose(capitalize, join(lang === 'en' ? ' ' : ''));

export const getNameGen = (
  type: Exclude<NameGeneratorTypes, 'People'>,
  lang: ValidLanguage
) => {
  const names = getJson(type, lang);
  return () => joinAndCap(lang)([choice(names.prefix), choice(names.suffix)]);
};

export const getPeopleNameGen = (lang: ValidLanguage) => (people: People) => {
  const names = peopleNames;
  const peopleKey = peopleToJsonKey(people);
  const peopleName: PeopleNames | undefined = names.find(
    (pn) => pn.people === peopleKey
  );

  if (!peopleName) {
    throw new Error(`Could not find names for people: ${peopleKey}`);
  }

  return (gender: PeopleSuffix) => {
    return peopleName.suffix[gender].length === 0
      ? undefined
      : joinAndCap(lang)([
          choice(peopleName.prefix),
          choice(peopleName.suffix[gender]),
        ]);
  };
};

const getJson = (
  type: Exclude<NameGeneratorTypes, 'People'>,
  lang: ValidLanguage
): NameGeneratorResource => {
  switch (type) {
    case 'Inns':
      return innNamesSv;
    case 'Villages':
      return lang === 'sv' ? villageNamesSv : villageNamesEn;
    case 'Plants':
      return plantNamesSv;
  }
};

type PeopleNames = {
  people: string;
  prefix: string[];
  suffix: {
    [P in PeopleSuffix]: string[];
  };
};

type PeopleSuffix = 'male' | 'female' | 'all';

const peopleToJsonKey = (people: People): string => {
  switch (people) {
    case People.Dwarven:
      return 'dwarf';
    case People.Elven:
      return 'elf';
    case People.Mittlander:
      return 'mittlander';
    case People.Stormlander:
      return 'stormlander';
    case People.Troll:
      return 'troll';
    case People.Westmarkian:
      return 'virann';
  }
};
