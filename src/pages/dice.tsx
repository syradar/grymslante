/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { useState } from 'react';

import { SegmentedControl } from '../components/segmented-control';
import { Stepper } from '../components/stepper';
import { buttonPrimary, card, h3Style, buttonSubtle } from '../styles';
import {
  d10,
  d20,
  d5,
  DiceResults,
  explodingD10,
  validExplodeRange,
} from '../utils/dice-roller';
import { Heading } from '../components/heading';

interface RollResult extends DiceResults {
  modifier: number;
}

interface RollHistoryItem {
  roll: string;
  result: string;
}

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

  const [rollHistory, setRollHistory] = useState<RollHistoryItem[]>([]);
  const clearRollHistory = () => setRollHistory([]);

  const [diceResult, setDiceResult] = useState<RollResult | undefined>();

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

  const displaySign = (num: number): string => {
    return modifier > 0 ? `+ ${modifier}` : `– ${Math.abs(modifier)}`;
  };

  const getDieToRoll = (): string => {
    const die = `1${segments[active]}`;

    const or = `${
      segments[active] === 'd10 OR'
        ? explodeOn === 10
          ? `(10)`
          : `(${explodeOn}–10)`
        : ''
    }`;
    const mod = `${modifier !== 0 ? displaySign(modifier) : ''}
    `;
    return [die, or, mod].join(' ');
  };

  const rollDie = () => {
    const dieFn = getDieType(segments[active]);
    const result = {
      ...(segments[active] === 'd10 OR' && validExplodeRange(explodeOn)
        ? dieFn(explodeOn)
        : dieFn()),
      modifier,
    };
    setDiceResult(result);
    setRollHistory([
      {
        result: result.sum.toString(),
        roll: getDieToRoll(),
      },
      ...rollHistory,
    ]);
  };

  return (
    <>
      <Heading>Dice Roller</Heading>
      <div tw="grid lg:grid-flow-col" css={card}>
        <div tw="">
          <div tw="mb-3">
            <SegmentedControl
              segments={segments}
              selectedIndex={active}
              onSegmentClick={(index) => handleSegmentClick(index)}
            ></SegmentedControl>
          </div>
          <div tw="grid grid-flow-col mb-12 auto-cols-fr">
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
          <div tw="flex justify-center mb-12">
            <button tw="" css={buttonPrimary} onClick={rollDie}>
              Roll {getDieToRoll()}
            </button>
          </div>
        </div>
        <div
          tw="mb-12 text-9xl flex flex-col items-center justify-self-center"
          css={[
            {
              minHeight: '9rem',
              minWidth: '3ch',
              maxWidth: '3ch',
            },
          ]}
        >
          {diceResult && (
            <>
              <div tw="text-9xl text-center">{diceResult.sum}</div>
              <div tw="text-xs dark:text-gray-200 light:text-gray-500 text-center">
                {`Roll: ${diceResult.rolls.join(' + ')} ${
                  modifier !== 0 ? displaySign(modifier) : ''
                }`}
              </div>
            </>
          )}
        </div>
        <div>
          <div tw="flex items-center mb-1 justify-between">
            <h3 css={[h3Style(), tw`mb-0`]}>Roll History</h3>
            <button css={[buttonSubtle()]} onClick={() => clearRollHistory()}>
              Clear
            </button>
          </div>
          <div tw="text-gray-500 dark:text-gray-300 p-3 rounded-lg bg-gray-100 dark:bg-gray-600 overflow-x-scroll h-96">
            {rollHistory &&
              rollHistory.map((rh) => (
                <div tw="mb-2">
                  <div>{rh.roll}</div>
                  <div tw="font-bold">{rh.result}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
