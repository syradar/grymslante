/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';
import React from 'react';

import { Link } from 'react-router-dom';
import { card } from '../styles';

const Navbar = () => (
  <nav tw="mb-5" css={card}>
    <ul tw="grid grid-flow-col gap-x-3">
      <li tw="hover:text-blue-400">
        <Link to="/">Home</Link>
      </li>
      <li tw="hover:text-blue-400">
        <Link to="/skills">Skills</Link>
      </li>
      <li tw="hover:text-blue-400">
        <Link to="/dice">Dice</Link>
      </li>
      <li tw="hover:text-blue-400">
        <Link to="/names">Names</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
