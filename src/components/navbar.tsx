/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';
import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav tw="mb-12 bg-gray-300 dark:bg-gray-700">
    <ul tw="grid grid-flow-col gap-x-3">
      <li tw="">
        <Link
          css={tw`flex justify-center items-center text-center py-3 px-2 hover:bg-red-500 hover:text-white hover:transition-colors`}
          to="/names"
        >
          Names
        </Link>
      </li>
      <li tw="">
        <Link
          css={tw`flex justify-center items-center text-center py-3 px-2 hover:bg-red-500 hover:text-white hover:transition-colors`}
          to="/items"
        >
          Items
        </Link>
      </li>
      <li tw="">
        <Link
          css={tw`flex justify-center items-center text-center py-3 px-2 hover:bg-red-500 hover:text-white hover:transition-colors`}
          to="/skills"
        >
          <span tw="">Skills</span>
          <span tw="flex items-center ml-1 p-0.5 bg-gray-300 dark:bg-gray-600 text-xs leading-none font-bold rounded text-gray-400">
            DODT
          </span>
        </Link>
      </li>
      <li tw="">
        <Link
          css={tw`flex justify-center items-center text-center py-3 px-2 hover:bg-red-500 hover:text-white hover:transition-colors`}
          to="/dice"
        >
          Diceᛝ
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
