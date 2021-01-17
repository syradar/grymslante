/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { useState } from 'react';

import { SegmentedControl } from '../components/segmented-control';
import { Stepper } from '../components/stepper';
import { buttonPrimary, card } from '../styles';

import { Heading } from '../components/heading';

export const Names = () => {
  const segments = [
    'Mittlander',
    'Stormlander',
    'Virann',
    'Elf',
    'Dwarf',
    'Troll',
  ];
  const [active, setActive] = useState(0);

  return (
    <>
      <Heading>Dice Roller</Heading>
      <div css={card} tw="flex flex-col justify-center px-3">
        <div tw="mb-3">
          <SegmentedControl
            vertical={true}
            segments={segments}
            selectedIndex={active}
            onSegmentClick={(index) => setActive(index)}
          ></SegmentedControl>
        </div>
        <button tw="mb-5" css={buttonPrimary}>
          Generate names
        </button>
      </div>
    </>
  );
};
