/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { useState } from 'react';

import { SegmentedControl } from '../components/segmented-control';
import { buttonPrimary, card } from '../styles';

import { Heading } from '../components/heading';

import peopleNames from '../data/people-names.json';
import { rollDice } from '../utils/dice-roller';

export const Names = () => {
  const segments = [
    'Mittlander',
    'Stormlander',
    'Virann',
    'Elf',
    'Dwarf',
    'Troll',
  ];

  const emptyNames = {
    male: [],
    female: [],
    both: [],
  };

  const [nameResult, setNameResult] = useState({ ...emptyNames });

  const [active, setActive] = useState(0);

  const handleSegmentClick = (index: number) => {
    setActive(index);
    setNameResult({ ...emptyNames });
  };

  const choice = (names: string[]): string => {
    const randomNumber = rollDice(0, names.length - 1)();
    return names[randomNumber];
  };

  const range = (n: number) => Array.from({ length: n }, (_, key) => key);

  type Suffix = {
    [type in string]?: string[];
  };

  type Names = {
    people: string;
    prefix: string[];
    suffix: Suffix;
  };

  const capitalize = (s: string) => s[0].toUpperCase() + s.slice(1);

  const handleGenerateNameClick = () => {
    const type = segments[active].toLowerCase();

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
                ? range(10).map(
                    (_) => `${choice(names.prefix)}${choice(suffixes)}`
                  )
                : [''],
          };
        })
        .map((a) => {
          console.log(a);
          return a;
        })
        .reduce((acc, cur) => ({ ...acc, ...cur }), {});

      setNameResult(() => ({
        ...emptyNames,
        ...generatedNames,
      }));
    }
  };

  return (
    <>
      <Heading>Name Generator</Heading>
      <div css={card} tw="flex flex-col justify-center px-3">
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
          <button
            tw="mb-5"
            css={buttonPrimary}
            onClick={handleGenerateNameClick}
          >
            Generate names
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
            {nameResult.male.length !== 0 && <Heading h3={true}>Male</Heading>}
            {nameResult.male.length !== 0 &&
              nameResult.male.map((name, index) => (
                <div tw="pb-1" key={name + index}>
                  {capitalize(name)}
                </div>
              ))}
          </div>
          <div tw="text-center">
            {nameResult.female.length !== 0 && (
              <Heading h3={true}>Female</Heading>
            )}
            {nameResult.female.length !== 0 &&
              nameResult.female.map((name, index) => (
                <div tw="pb-1" key={name + index}>
                  {capitalize(name)}
                </div>
              ))}
          </div>
          <div tw="text-center">
            {nameResult.both.length !== 0 && <Heading h3={true}>Both</Heading>}
            {nameResult.both.length !== 0 &&
              nameResult.both.map((name, index) => (
                <div tw="pb-1" key={name + index}>
                  {capitalize(name)}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
