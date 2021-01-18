/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { card } from '../styles';
import { Heading } from '../components/heading';

export const Changelog = () => {
  return (
    <div tw="max-w-prose">
      <Heading>Changelog</Heading>
      <p tw="mb-5">Changes and improvements to Grymslante.</p>
      <div css={card}>
        <div tw="mb-8">
          <Heading h3={true}>Added Plants, Villages and Inns</Heading>
          <p tw="mb-2">
            Now you can generate names of beer heavy inns, plants from another
            world and cozy villages.
          </p>
        </div>

        <div tw="mb-8">
          <Heading h3={true}>Fixed colors and Changelog</Heading>
          <p tw="mb-2">
            I managed to forget the light theme for the Dice Roller. Darkened
            the light theme background to make the cards stand out a bit more.
            Then darkened the footer and removed the top bar background. Added a
            light theme to the Dice Roller page and tweaked the dark theme.
            Limited the Changelog to 65 characters for improved readability.
          </p>
        </div>

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
    </div>
  );
};
