/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer
    tw="py-4 px-3 
  flex flex-col
  bg-gray-200 dark:bg-gray-800 text-sm dark:text-gray-400"
  >
    <div tw="mb-3">
      <Link
        css={tw`text-red-500 hover:text-red-400 hover:underline`}
        to="/changelog"
      >
        Changelog
      </Link>
    </div>
    <div tw="flex justify-between">
      <a
        tw="text-red-500 hover:text-red-400 hover:underline"
        href="https://github.com/syradar/grymslante"
      >
        GitHub
      </a>
      <div tw="text-right">
        Created with <span tw="mr-1.5">❤️</span> by David Malmström &copy;{' '}
        {new Date().getFullYear()}
      </div>
    </div>
  </footer>
);

export default Footer;
