/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';
import React from 'react';

const Footer = () => (
  <footer tw="py-4 px-3 bg-gray-100 dark:bg-gray-800 grid grid-flow-col flex-shrink-0 text-sm dark:text-gray-400">
    <a
      tw="text-red-500 hover:text-red-400 hover:underline"
      href="https://github.com/syradar/grymslante"
    >
      GitHub
    </a>
    <div tw="text-right">
      Created with ❤️ by David Malmström &copy; {new Date().getFullYear()}
    </div>
  </footer>
);

export default Footer;
