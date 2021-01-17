/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { useState } from 'react';

import { SegmentedControl } from '../components/segmented-control';
import { Stepper } from '../components/stepper';
import { buttonPrimary, card } from '../styles';
import {
  d10,
  d20,
  d5,
  explodingD10,
  validExplodeRange,
} from '../utils/dice-roller';
import { Heading } from '../components/heading';

export const Dice = () => {
  const segments = ['d5', 'd10', 'd10 OR', 'd20'];
  const [active, setActive] = useState(0);

  const handleSegmentClick = (index: number) => {
    setActive(index);
    setDiceResult(undefined);
  };

  const [modifier, setModifier] = useState(0);
  const handleModifierChange = (value: number) => {
    setModifier(value);
    setDiceResult(undefined);
  };

  const [explodeOn, setExplodeOn] = useState(10);
  const handleExplodeOn = (value: number) => {
    setExplodeOn(value);
    setDiceResult(undefined);
  };

  const [diceResult, setDiceResult] = useState<number>();

  const getDieType = (die: string) => {
    switch (die) {
      case 'd5':
        return d5;
      case 'd10':
        return d10;
      case 'd10 OR':
        return explodingD10;
      case 'd20':
      default:
        return d20;
    }
  };

  const rollDie = () => {
    const dieFn = getDieType(segments[active]);
    const result =
      segments[active] === 'd10 OR' && validExplodeRange(explodeOn)
        ? dieFn(explodeOn) + modifier
        : dieFn() + modifier;
    setDiceResult(() => result);
  };

  return (
    <>
      <Heading>Dice Roller</Heading>
      <div tw="flex flex-col justify-center" css={card}>
        <div tw="mb-3">
          <SegmentedControl
            segments={segments}
            selectedIndex={active}
            onSegmentClick={(index) => handleSegmentClick(index)}
          ></SegmentedControl>
        </div>
        <div tw="grid grid-flow-col mb-5">
          <Stepper
            id={'diceModifier'}
            label={'Modifier'}
            min={-10}
            max={10}
            value={modifier}
            onChange={(value) => handleModifierChange(value)}
          ></Stepper>
          {segments[active] === 'd10 OR' && (
            <Stepper
              id={'explodingModifier'}
              label={'Explode on'}
              min={2}
              max={10}
              value={explodeOn}
              onChange={(value) => handleExplodeOn(value)}
            ></Stepper>
          )}
        </div>
        <button tw="mb-5" css={buttonPrimary} onClick={rollDie}>
          Roll 1{segments[active]}
          {segments[active] === 'd10 OR' && (
            <span> ({explodeOn === 10 ? `10` : `${explodeOn}–10`})</span>
          )}
          {modifier !== 0 && (
            <span>
              {modifier > 0 ? ' +' : ' '}
              {modifier}
            </span>
          )}
        </button>
        {diceResult && (
          <>
            <div tw="text-9xl text-center">{diceResult}</div>
          </>
        )}
      </div>
    </>
  );
};
