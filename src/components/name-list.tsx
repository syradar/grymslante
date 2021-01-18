/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';

import { Heading } from '../components/heading';

export interface NameListProps {
  heading: string;
  names: string[];
}

export const NameList = ({ heading = '', names = [] }: NameListProps) => {
  return (
    <>
      <Heading h3={true}>{heading}</Heading>
      {names.map((name, index) => (
        <div tw="pb-1" key={name + index}>
          {name}
        </div>
      ))}
    </>
  );
};
