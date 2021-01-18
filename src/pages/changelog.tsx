/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { card } from '../styles';
import { Heading } from '../components/heading';

export const Changelog = () => {
  return (
    <>
      <Heading>Changelog</Heading>
      <p tw="mb-5">Changes and improvements to Grymslante.</p>
      <div css={card}>
        <Heading h3={true}>Initial release</Heading>
        <p>Released with a Skill Calculator, Dice Roller and Name Generator.</p>
      </div>
    </>
  );
};
