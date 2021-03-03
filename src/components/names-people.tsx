/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { useState } from 'react';

import { SegmentedControl } from '../components/segmented-control';
import { buttonPrimary } from '../styles';

import { NameList } from './name-list';
import { range } from '../utils/utils';
import { useTranslation } from 'react-i18next';
import { SegmentProp } from '../pages/names';
import { getPeopleNameGen } from '../services/name.services';
import { ValidLanguage } from '../models/language';
import { isPeople, People } from '../utils/people/people.model';
import { isNotNullish } from '../utils/type-guards';

export const NamesPeople = () => {
  const { t, i18n } = useTranslation('names');
  const nameGen = getPeopleNameGen(i18n.language as ValidLanguage);

  const segments: SegmentProp[] = [
    {
      id: People.Mittlander,
      label: 'Mittlander',
    },
    {
      id: People.Stormlander,
      label: 'Stormlander',
    },
    {
      id: People.Westmarkian,
      label: 'Virann',
    },
    {
      id: People.Elven,
      label: 'Elf',
    },
    {
      id: People.Dwarven,
      label: 'Dwarf',
    },
    {
      id: People.Troll,
      label: 'Troll',
    },
  ].map((seg) => ({ ...seg, label: t(`people.${seg.label}`) }));

  const emptyNames = {
    male: [] as string[],
    female: [] as string[],
    all: [] as string[],
  };

  const [nameResult, setNameResult] = useState({ ...emptyNames });

  const [active, setActive] = useState(0);

  const handleSegmentClick = (index: number) => {
    setActive(index);
    setNameResult({ ...emptyNames });
  };

  const handleGenerateNameClick = () => {
    const people = segments[active].id;
    if (!isPeople(people)) return;

    const peopleNameGen = nameGen(people);
    if (typeof peopleNameGen !== 'function') return;

    const generatedNames = {
      male: range(10)
        .map((_) => peopleNameGen('male'))
        .filter(isNotNullish),
      female: range(10)
        .map((_) => peopleNameGen('female'))
        .filter(isNotNullish),
      all: range(10)
        .map((_) => peopleNameGen('all'))
        .filter(isNotNullish),
    };

    setNameResult(() => ({
      ...emptyNames,
      ...generatedNames,
    }));
  };

  return (
    <div tw="flex flex-col justify-center">
      <div tw="mb-12">
        <div tw="md:hidden">
          <SegmentedControl
            vertical={true}
            segments={segments}
            selectedIndex={active}
            onSegmentClick={(index) => handleSegmentClick(index)}
          ></SegmentedControl>
        </div>
        <div tw="hidden md:block">
          <SegmentedControl
            vertical={false}
            segments={segments}
            selectedIndex={active}
            onSegmentClick={(index) => handleSegmentClick(index)}
          ></SegmentedControl>
        </div>
      </div>
      <div tw="flex justify-center mb-12">
        <button tw="mb-5" css={buttonPrimary} onClick={handleGenerateNameClick}>
          {t('Generate names')}
        </button>
      </div>
      <div
        tw="grid gap-x-2"
        css={{
          gridTemplateColumns: `repeat(${
            Object.values(nameResult).filter((nr) => nr.length !== 0).length
          }, minmax(0, 1fr))`,
        }}
      >
        <div tw="text-center">
          {nameResult.female.length !== 0 && (
            <NameList
              heading={t('Female')}
              names={nameResult.female}
            ></NameList>
          )}
        </div>
        <div tw="text-center">
          {nameResult.male.length !== 0 && (
            <NameList heading={t('Male')} names={nameResult.male}></NameList>
          )}
        </div>
        <div tw="text-center">
          {nameResult.all.length !== 0 && (
            <NameList heading={t('All')} names={nameResult.all}></NameList>
          )}
        </div>
      </div>
    </div>
  );
};
