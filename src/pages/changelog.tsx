/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { card } from '../styles';
import { Heading } from '../components/heading';

export const Changelog = () => {
  return (
    <div tw="flex justify-center mb-24">
      <div tw="max-w-prose">
        <Heading>Changelog</Heading>
        <p tw="mb-5">Changes and improvements to Grymslante.</p>

        <div css={card} tw="mb-8 p-8">
          <header>
            <div tw="text-xs text-gray-400">2021-01-25</div>
            <Heading h3={true}>I can speak in different languages</Heading>
          </header>
          <p tw="mb-2">
            Trudvang has both Swedish and international players and game
            masters. It made sense to provide them with the same functionality
            in their own language. This meant researching and implementing a
            translation library, I chose{' '}
            <a
              tw="text-red-500 hover:text-red-400 hover:underline"
              target="_blank"
              rel="noreferrer"
              href="https://react.i18next.com/"
            >
              react-i18next
            </a>
            . Then after a few hours of reading and debugging I got it working.
            Now I just had to translate the whole app. It went rather smooth. I
            had to change some data models to fit and create a language switcher
            at the top. I still don't have resource files in English for names
            and the items are still in English. But that is only a data
            collection problem. Soon I will provide fully translated names and
            items™️
          </p>
          <div tw="flex align-baseline text-2xl text-red-500">
            <div>&mdash;</div>
            <div className="bilibin">ZIOX</div>
          </div>
        </div>

        <div css={card} tw="mb-8 p-8">
          <header>
            <div tw="text-xs text-gray-400">2021-01-23</div>
            <Heading h3={true}>Mobile and Tablet view for Item List </Heading>
          </header>
          <p tw="mb-2">
            The table use of the Item List was not working out great on smaller
            devices. A new design more suited for small devices has been added
            that automatically switches when on smaller screens.
          </p>
        </div>

        <div css={card} tw="mb-8 p-8 light:bg-gray-800 light:text-gray-200">
          <header>
            <div tw="text-xs text-gray-400">2021-01-23</div>
            <Heading h3={true}>Smart Dark Mode</Heading>
          </header>
          <p tw="mb-2">
            I reworked Dark Mode so that it will now check LocalStorage to see
            if theme has been set. Otherwise it checks to see what the person
            prefers, you can select which Theme you want in the settings of your
            Operating System. If it can't find anything it will default to the
            Light theme.
          </p>
        </div>

        <div css={card} tw="mb-8 p-8">
          <header>
            <div tw="text-xs text-gray-400">2021-01-23</div>
            <Heading h3={true}>Item List</Heading>
          </header>
          <p tw="mb-2">
            I released the first version of the Item List. It features filtering
            by type and searching by name.
          </p>
        </div>

        <div css={card} tw="mb-8 p-8">
          <Heading h3={true}>Added Plants, Villages and Inns</Heading>
          <p tw="mb-2">
            Now you can generate names of beer heavy inns, plants from another
            world and cozy villages.
          </p>
        </div>

        <div css={card} tw="mb-8 p-8">
          <Heading h3={true}>Fixed colors and Changelog</Heading>
          <p tw="mb-2">
            I managed to forget the light theme for the Dice Roller. Darkened
            the light theme background to make the cards stand out a bit more.
            Then darkened the footer and removed the top bar background. Added a
            light theme to the Dice Roller page and tweaked the dark theme.
            Limited the Changelog to 65 characters for improved readability.
          </p>
        </div>

        <div css={card} tw="mb-8 p-8">
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

        <div css={card} tw="mb-0 p-8">
          <Heading h3={true}>Initial release</Heading>
          <p>
            Released with a Skill Calculator, Dice Roller and Name Generator.
          </p>
        </div>
      </div>
    </div>
  );
};
