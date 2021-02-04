/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation('core');

  return (
    <footer
      tw="py-4 px-3 
  flex flex-col
  bg-gray-200 dark:bg-gray-800 text-sm dark:text-gray-400"
    >
      <div tw="flex flex-wrap mb-3">
        <div tw="mr-8">
          <Link
            css={tw`text-red-500 hover:text-red-400 hover:underline`}
            to="/changelog"
          >
            {t('Changelog')}
          </Link>
        </div>
        <div tw="mr-8">
          <Link
            css={tw`text-red-500 hover:text-red-400 hover:underline`}
            to="/credits"
          >
            {t('Credits')}
          </Link>
        </div>
        <a
          tw="text-red-500 hover:text-red-400 hover:underline"
          href="https://github.com/syradar/grymslante"
        >
          GitHub
        </a>
      </div>

      <div>
        {t('Created with')} <span tw="mr-1.5">❤️</span> {t('by')} David
        Malmström &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};
