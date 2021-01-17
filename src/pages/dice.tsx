/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import tw, { css } from 'twin.macro';

import { SegmentedControl } from '../components/segmented-control';
import { Stepper } from '../components/stepper';
import { buttonPrimary, card } from '../styles';
import { d10, d20, d5, explodingD10 } from '../utils/dice-roller';

export const Dice = () => {
  const segments = ['d5', 'd10', 'd20'];
  const [active, setActive] = useState(0);

  const handleSegmentClick = (index: number) => {
    setActive(index);
    setDiceResult(undefined);
  };

  const [modifier, setModifier] = useState(0);
  const handleModifierChange = (value: number) => setModifier(value);

  const [diceResult, setDiceResult] = useState<number>();

  const getDieType = (die: string) => {
    switch (die) {
      case 'd5':
        return d5;
      case 'd10':
        return d10;
      case 'd20':
      default:
        return d20;
    }
  };

  const rollDie = () => {
    const dieFn = getDieType(segments[active]);
    const result = dieFn() + modifier;
    setDiceResult(() => result);
  };

  return (
    <>
      <div tw="mb-3">
        <SegmentedControl
          segments={segments}
          // segments={['d5', 'd10']}
          selectedIndex={active}
          onSegmentClick={(index) => handleSegmentClick(index)}
        ></SegmentedControl>
      </div>
      <div tw="flex flex-col justify-center" css={card}>
        <div tw="flex flex-col justify-center mb-5">
          <Stepper
            id={'diceModifier'}
            label={'Modifier'}
            min={-10}
            max={10}
            value={modifier}
            onChange={(value) => handleModifierChange(value)}
          ></Stepper>
        </div>
        <button tw="mb-5" css={buttonPrimary} onClick={rollDie}>
          Roll
        </button>
        {diceResult && (
          <>
            <div tw="text-9xl text-center">{diceResult}</div>
            <div tw="text-center">
              1{segments[active]}{' '}
              {modifier !== 0 && (
                <span>
                  {modifier > 0 ? '+' : ''} {modifier}
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};
