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
        <div tw="mb-8">
          <Heading h3={true}>Improve Dice Roller</Heading>
          <p tw="mb-2">I felt that the Dice Roller was a bit lackluster.</p>

          <ul tw="list-disc list-inside pl-2">
            <li>Added a section displaying a history of all Dice Rolls.</li>
            <li>Improved how the Dice Roller page looks on larger screens.</li>
            <li>
              Improved how the dice to roll on the Roll-button is displayed.
            </li>
            <li>Refactored the Dice Rolling to accommodate the Roll History</li>
          </ul>
        </div>
        <div tw="mb-0">
          <Heading h3={true}>Initial release</Heading>
          <p>
            Released with a Skill Calculator, Dice Roller and Name Generator.
          </p>
        </div>
      </div>
    </>
  );
};
