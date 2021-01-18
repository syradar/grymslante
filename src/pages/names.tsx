/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import React, { useState } from 'react';

import { SegmentedControl } from '../components/segmented-control';
import { card } from '../styles';
import { Heading } from '../components/heading';
import { NamesPeople } from '../components/names-people';
import { GenericNameGenerator } from '../components/generic-name-generator';
import innNames from '../data/inn-names.json';
import villageNames from '../data/village-names.json';
import plantNames from '../data/plant-names.json';

type NameGeneratorTypes = 'People' | 'Inns' | 'Villages' | 'Plants';

interface NameGenerator {
  label: NameGeneratorTypes;
  component: React.FC;
}

const nameGenerators: NameGenerator[] = [
  {
    label: 'People',
    component: NamesPeople,
  },
  {
    label: 'Inns',
    component: Heading,
  },
  {
    label: 'Villages',
    component: NamesPeople,
  },
  {
    label: 'Plants',
    component: NamesPeople,
  },
];

export const Names = () => {
  const segments: NameGeneratorTypes[] = nameGenerators.map((ng) => ng.label);
  const [active, setActive] = useState(0);

  const handleSegmentClick = (index: number) => {
    setActive(index);
  };

  return (
    <>
      <Heading>Name Generators</Heading>
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
                    json={innNames}
                    label={'Inn'}
                  ></GenericNameGenerator>
                </div>
              );
            case 'Villages':
              return (
                // TODO: Fix state
                <div key="village">
                  <GenericNameGenerator
                    json={villageNames}
                    label={'Village'}
                  ></GenericNameGenerator>
                </div>
              );
            case 'Plants':
              return (
                // TODO: Fix state
                <div key="plant">
                  <GenericNameGenerator
                    json={plantNames}
                    label={'Plant'}
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
