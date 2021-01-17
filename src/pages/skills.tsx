/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { card } from '../styles';

import { useState } from 'react';
import { Stepper } from '../components/stepper';
import { Heading } from '../components/heading';

const atLeast = (lowest: number) => (value: number) =>
  value < lowest ? lowest : value;

const atLeastOne = atLeast(1);

const getSkillCost = (
  initial: number,
  target: number,
  modifier: number = 0,
  cost: number = 0
): number =>
  initial >= target
    ? cost
    : getSkillCost(
        initial + 1,
        target,
        modifier,
        cost + atLeastOne(initial + 1 + modifier)
      );

export const Skills = () => {
  const [current, setCurrent] = useState<number>(1);
  const [target, setTarget] = useState<number>(2);
  const [modifier, setModifier] = useState<number>(0);

  const handleCurrentChange = (newCurrent: number) => {
    setCurrent(newCurrent);
    if (newCurrent >= target) {
      setTarget(newCurrent + 1);
    }
  };

  const handleTargetChange = (newTarget: number) => {
    setTarget(newTarget);
    if (newTarget <= current) {
      setCurrent(newTarget - 1);
    }
  };

  return (
    <>
      <Heading>Skill Calculator</Heading>
      <div css={card}>
        <div tw="grid grid-flow-col">
          <Stepper
            twProps={tw`mb-4`}
            id={'current'}
            label={'Old Skill Value'}
            min={1}
            max={20}
            value={current}
            onChange={(value) => handleCurrentChange(value)}
          ></Stepper>

          <Stepper
            twProps={tw`mb-4`}
            id={'modifier'}
            label={'Attribute Modifier'}
            min={-4}
            max={4}
            value={modifier}
            onChange={(value) => setModifier(value)}
          ></Stepper>
        </div>

        <Stepper
          twProps={tw`mb-12`}
          id={'target'}
          label={'New Skill Value'}
          min={2}
          max={20}
          value={target}
          onChange={(value) => handleTargetChange(value)}
        ></Stepper>

        <div tw="text-center">Cost</div>
        <div tw="text-9xl text-center">
          {getSkillCost(current, target, modifier)}
        </div>
      </div>
    </>
  );
};
