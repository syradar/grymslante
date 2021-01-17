/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import tw, { css } from 'twin.macro';

import { SegmentedControl } from '../components/segmented-control';
import { Stepper } from '../components/stepper';
import { explodingD10 } from '../utils/dice-roller';

export const Dice = () => {
  const [active, setActive] = useState(0);

  const handleSegmentClick = (index: number) => setActive(index);

  const [modifier, setModifier] = useState(0);
  const handleModifierChange = (value: number) => setModifier(value);

  return (
    <>
      <div tw="mb-3">
        <SegmentedControl
          segments={['d5', 'd10', 'd20']}
          // segments={['d5', 'd10']}
          selectedIndex={active}
          onSegmentClick={(index) => handleSegmentClick(index)}
        ></SegmentedControl>
      </div>
      <div tw="mb-3">
        <Stepper
          id={'diceModifier'}
          min={-10}
          max={10}
          value={modifier}
          onChange={(value) => handleModifierChange(value)}
        ></Stepper>
      </div>
      {explodingD10(7, 3)} {modifier}
    </>
  );
};
