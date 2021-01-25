/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { useState } from 'react';

import { SegmentedControl } from '../components/segmented-control';
import { buttonPrimary } from '../styles';

import peopleNames from '../data/people-names.json';
import { NameList } from './name-list';
import { capitalize, choice, range } from '../utils/utils';
import { useTranslation } from 'react-i18next';
import { SegmentProp } from '../pages/names';

export const NamesPeople = () => {
  const { t } = useTranslation('names');

  const segments: SegmentProp[] = [
    {
      id: 'Mittlander',
      label: 'Mittlander',
    },
    {
      id: 'Stormlander',
      label: 'Stormlander',
    },
    {
      id: 'Virann',
      label: 'Virann',
    },
    {
      id: 'Elf',
      label: 'Elf',
    },
    {
      id: 'Dwarf',
      label: 'Dwarf',
    },
    {
      id: 'Troll',
      label: 'Troll',
    },
  ].map((seg) => ({ ...seg, label: t(`people.${seg.id}`) }));

  const emptyNames = {
    male: [],
    female: [],
    all: [],
  };

  const [nameResult, setNameResult] = useState({ ...emptyNames });

  const [active, setActive] = useState(0);

  const handleSegmentClick = (index: number) => {
    setActive(index);
    setNameResult({ ...emptyNames });
  };

  type Suffix = {
    [type in string]?: string[];
  };

  type Names = {
    people: string;
    prefix: string[];
    suffix: Suffix;
  };

  const handleGenerateNameClick = () => {
    const type = segments[active].id.toLowerCase();

    const names: Names | undefined = peopleNames.find(
      (pn) => pn.people === type
    );

    if (names) {
      const generatedNames = Object.keys(names.suffix)
        .filter((k) => names.suffix[k]?.length !== 0)
        .map((k) => {
          const suffixes = names.suffix[k];

          return {
            [k]:
              suffixes !== undefined
                ? range(10)
                    .map((_) => `${choice(names.prefix)}${choice(suffixes)}`)
                    .map(capitalize)
                : [''],
          };
        })
        .reduce((acc, cur) => ({ ...acc, ...cur }), {});

      setNameResult(() => ({
        ...emptyNames,
        ...generatedNames,
      }));
    }
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
