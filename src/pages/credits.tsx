/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { card } from '../styles';
import { Heading } from '../components/heading';

export const Credits = () => {
  return (
    <div tw="flex justify-center mb-24">
      <div tw="max-w-prose">
        <Heading>Credits</Heading>
        <p tw="mb-5">
          Grymslante could not have been made without these people.
        </p>

        <div css={card} tw="mb-8 p-8">
          <header>
            <Heading h3={true}>Names</Heading>
          </header>
          <p tw="mb-4">
            RiotMinds for peoples names and the name for this app.
          </p>
          <p tw="mb-4">
            Anders Blom and the RiotMinds forumists for peoples names.
          </p>
          <p tw="mb-4">
            Turgalt Bronsskägg, Vainothell, Jekub, Jeraes, Huggtanden, Modde
            Troll, Dorum, Mekradoni, Foul Lich, Eriq and Namare for village
            names.
          </p>
          <p tw="mb-4">
            Vainothell, Jekub, Dorum, Mekradoni, Foul Lich, Fengald and Lord
            Fluffo for plant names.
          </p>
          <p tw="mb-4">
            I can't find where I got the names for inns, it was probably over
            five years ago, thank you.
          </p>
        </div>

        <div css={card} tw="mb-8 p-8">
          <header>
            <Heading h3={true}>Items</Heading>
          </header>
          <p tw="mb-4">RiotMinds for all items.</p>
        </div>

        <div css={card} tw="mb-8 p-8">
          <header>
            <Heading h3={true}>Skills, Dice and Travel</Heading>
          </header>
          <p tw="mb-4">RiotMinds for all mechanics.</p>
        </div>
      </div>
    </div>
  );
};
