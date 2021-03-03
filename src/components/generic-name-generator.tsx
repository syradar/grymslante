/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { useState } from 'react';

import { buttonPrimary } from '../styles';

import { NameList } from './name-list';
import { range } from '../utils/utils';
import { useTranslation } from 'react-i18next';
import { getNameGen, NameGeneratorTypes } from '../services/name.services';
import { ValidLanguage } from '../models/language';

interface GenericNameGeneratorProps {
  type: Exclude<NameGeneratorTypes, 'People'>;
  label: string;
  buttonText: string;
  maxNames?: number;
}

export const GenericNameGenerator = ({
  type,
  label,
  buttonText,
  maxNames = 10,
}: GenericNameGeneratorProps) => {
  const [nameResult, setNameResult] = useState<string[]>([]);
  const { i18n } = useTranslation();
  const namegen = getNameGen(type, i18n.language as ValidLanguage);

  const handleGenerateNameClick = () =>
    setNameResult(range(maxNames).map((_) => namegen()));

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
