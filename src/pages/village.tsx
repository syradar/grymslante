/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { card } from '../styles';

import { useState } from 'react';
import { Heading } from '../components/heading';
import { useTranslation } from 'react-i18next';
import villageNamesSv from '../data/village-names-sv.json';
import villageNamesEn from '../data/village-names-en.json';
import { getVillage } from '../utils/village/village.model';
import { People } from '../utils/people/people.model';
import { capitalize } from '../utils/utils';

export const Village = () => {
  const { t, i18n } = useTranslation('village');

  const villageNames = i18n.language === 'sv' ? villageNamesSv : villageNamesEn;

  const [village, setVillage] = useState(
    getVillage({
      people: People.Stormlander,
      villageNamesJSON: villageNames,
    })
  );

  console.log(village);

  return (
    <>
      <Heading>Village</Heading>
      <div css={card} tw="">
        <Heading>
          {capitalize(village.name.join(i18n.language === 'en' ? ' ' : ''))}
        </Heading>
        <div>Population: {village.population}</div>
        <Heading h3={true}>Merchants and Services</Heading>
        {Object.entries(village.merchants).map(([type, merchants]) => (
          <div key={type}>
            <h4 tw="font-bold">{type}</h4>
            {merchants.map((mi, index) => (
              <div key={index}>{mi.name}</div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
