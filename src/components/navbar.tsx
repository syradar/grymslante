/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => (
  <nav tw="mb-5 dark:bg-blue-400 light:bg-red-400">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/skills">Skills</Link>
      </li>
      <li>
        <Link to="/dice">Dice</Link>
      </li>
      <li>
        <Link to="/names">Names</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
