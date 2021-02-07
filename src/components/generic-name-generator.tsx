/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { useState } from 'react';

import { buttonPrimary } from '../styles';

import { NameList } from './name-list';
import { capitalize, choice, range } from '../utils/utils';
import { useTranslation } from 'react-i18next';
import { NameGeneratorResource } from '../utils/names/names.model';

interface GenericNameGeneratorProps {
  json: NameGeneratorResource;
  label: string;
  buttonText: string;
  maxNames?: number;
}

export const GenericNameGenerator = ({
  json,
  label,
  buttonText,
  maxNames = 10,
}: GenericNameGeneratorProps) => {
  const [nameResult, setNameResult] = useState<string[]>([]);
  const { i18n } = useTranslation();

  const names: NameGeneratorResource = json;

  const handleGenerateNameClick = () =>
    setNameResult(
      range(maxNames)
        .map((_) => [choice(names.prefix), choice(names.suffix)])
        .map((words) =>
          i18n.language === 'en' ? words.join(' ') : words.join('')
        )
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
          {buttonText}
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
