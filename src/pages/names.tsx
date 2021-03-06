/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import React, { useState } from 'react';

import { SegmentedControl } from '../components/segmented-control';
import { card } from '../styles';
import { Heading } from '../components/heading';
import { NamesPeople } from '../components/names-people';
import { GenericNameGenerator } from '../components/generic-name-generator';
import innNamesSv from '../data/inn-names.json';
import villageNamesSv from '../data/village-names-sv.json';
import villageNamesEn from '../data/village-names-en.json';
import plantNamesSv from '../data/plant-names.json';
import { useTranslation } from 'react-i18next';

//type NameGeneratorTypes = 'People' | 'Inns' | 'Villages' | 'Plants';

export interface SegmentProp {
  id: string;
  label: string;
}

export const Names = () => {
  const { t, i18n } = useTranslation('names');

  const nameGenerators: SegmentProp[] = [
    {
      id: 'People',
      label: 'People',
    },
    {
      id: 'Inns',
      label: 'Inns',
    },
    {
      id: 'Villages',
      label: 'Villages',
    },
    {
      id: 'Plants',
      label: 'Plants',
    },
  ];

  const segments: SegmentProp[] = nameGenerators.map((ng) => ({
    ...ng,
    label: t(`generators.${ng.label}`),
  }));

  const [active, setActive] = useState(0);

  const handleSegmentClick = (index: number) => {
    setActive(index);
  };

  const villageNames = i18n.language === 'sv' ? villageNamesSv : villageNamesEn;

  return (
    <>
      <Heading>{t('Name Generators')}</Heading>
      {i18n.language === 'en' &&
        nameGenerators[active].label !== 'Villages' && (
          <div tw="text-gray-500 mb-2">
            {t('Only Swedish names right now.')}
          </div>
        )}
      <div tw="mb-5">
        <SegmentedControl
          segments={segments}
          selectedIndex={active}
          onSegmentClick={(index) => handleSegmentClick(index)}
        ></SegmentedControl>
      </div>
      <div css={card} tw="flex flex-col justify-center px-3">
        {(() => {
          switch (nameGenerators[active].label) {
            case 'People':
              return <NamesPeople></NamesPeople>;
            case 'Inns':
              return (
                // TODO: Fix state
                <div key="inn">
                  <GenericNameGenerator
                    json={innNamesSv}
                    label={t('Inn')}
                    buttonText={t(`Generate Inn names`)}
                  ></GenericNameGenerator>
                </div>
              );
            case 'Villages':
              return (
                // TODO: Fix state
                <div key="village">
                  <GenericNameGenerator
                    json={villageNames}
                    label={t('Village')}
                    buttonText={t(`Generate Village names`)}
                  ></GenericNameGenerator>
                </div>
              );
            case 'Plants':
              return (
                // TODO: Fix state
                <div key="plant">
                  <GenericNameGenerator
                    json={plantNamesSv}
                    buttonText={t(`Generate Plant names`)}
                    label={t('Plant')}
                  ></GenericNameGenerator>
                </div>
              );
            default:
              return <NamesPeople></NamesPeople>;
          }
        })()}
      </div>
    </>
  );
};
