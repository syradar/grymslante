/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import tw, { css } from 'twin.macro';

import { explodingD10 } from '../utils/dice-roller';

export const Dice = () => {

  return (
    <>
      {explodingD10(7, 3)}
    </>
  );
};
