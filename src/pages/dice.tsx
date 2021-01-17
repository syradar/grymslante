/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import tw, { css } from 'twin.macro';

import { SegmentedControl } from '../components/segmented-control';
import { explodingD10 } from '../utils/dice-roller';

export const Dice = () => {
  const [active, setActive] = useState(0);

  const handleSegmentClick = (index: number) => setActive(index);

  return (
    <>
      <SegmentedControl
        segments={['d5', 'd10', 'd20']}
        // segments={['d5', 'd10']}
        selectedIndex={active}
        onSegmentClick={handleSegmentClick}
      ></SegmentedControl>
      {explodingD10(7, 3)}
    </>
  );
};
