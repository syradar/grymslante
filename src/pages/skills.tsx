/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { card } from '../styles';

import { useState } from 'react';
import { Stepper } from '../components/stepper';
import { Heading } from '../components/heading';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('skills');
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
      <Heading>{t('Skill Calculator')}</Heading>
      <div css={card} tw="flex flex-wrap justify-between">
        <div tw="flex-auto">
          <Stepper
            twProps={tw`mb-2`}
            id={'current'}
            label={t('Old Skill Value')}
            min={1}
            max={20}
            value={current}
            onChange={(value) => handleCurrentChange(value)}
          ></Stepper>

          <Stepper
            twProps={tw`mb-2`}
            id={'target'}
            label={t('New Skill Value')}
            min={2}
            max={20}
            value={target}
            onChange={(value) => handleTargetChange(value)}
          ></Stepper>

          <Stepper
            twProps={tw`mb-6`}
            id={'modifier'}
            label={t('Attribute Modifier')}
            min={-4}
            max={4}
            value={modifier}
            onChange={(value) => setModifier(value)}
          ></Stepper>
        </div>
        <div tw="flex-auto flex flex-col justify-center md:px-16">
          <div tw="text-center">{t('Cost')}</div>
          <div tw="text-9xl text-center">
            {getSkillCost(current, target, modifier)}
          </div>
        </div>
      </div>
    </>
  );
};
