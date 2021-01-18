/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { useState } from 'react';

import { buttonPrimary } from '../styles';

import { NameList } from './name-list';
import { capitalize, choice, range } from '../utils/utils';

type NameGeneratorResource = {
  prefix: string[];
  suffix: string[];
};

interface GenericNameGeneratorProps {
  json: NameGeneratorResource;
  label: string;
  maxNames?: number;
}

export const GenericNameGenerator = ({
  json,
  label,
  maxNames = 10,
}: GenericNameGeneratorProps) => {
  const [nameResult, setNameResult] = useState<string[]>([]);

  const names: NameGeneratorResource = json;

  const handleGenerateNameClick = () =>
    setNameResult(
      range(maxNames)
        .map((_) => `${choice(names.prefix)}${choice(names.suffix)}`)
        .map(capitalize)
    );

  return (
    <div tw="flex flex-col justify-center">
      <div tw="flex justify-center">
        <button
          tw="mb-5"
          css={buttonPrimary}
          onClick={() => handleGenerateNameClick()}
        >
          Generate {label} names
        </button>
      </div>
      <div tw="text-center">
        {nameResult.length !== 0 && (
          <NameList heading={label} names={nameResult}></NameList>
        )}
      </div>
    </div>
  );
};
