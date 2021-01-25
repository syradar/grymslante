/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import React from 'react';

import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NavbarItem {
  label: string;
  path: string;
  chip?: string;
}

const Navbar = () => {
  const { t } = useTranslation('core');

  const pages: NavbarItem[] = [
    {
      label: 'Names',
      path: '/names',
    },
    {
      label: 'Items',
      path: '/items',
    },
    {
      label: 'Skills',
      path: '/skills',
      chip: 'DODT',
    },
    {
      label: 'Dice',
      path: '/dice',
    },
  ];

  return (
    <nav tw="mb-12 bg-gray-300 dark:bg-gray-700 flex justify-center">
      <ul tw="grid grid-flow-col gap-x-3 container">
        {pages.map((p) => (
          <li key={p.path}>
            <NavLink
              css={[
                tw`flex flex-col h-full justify-center items-center text-center 
                py-3 px-2 hover:bg-gray-400 dark:bg-gray-700 border-b-2 border-gray-300 dark:border-gray-700`,
              ]}
              to={p.path}
              activeStyle={tw`font-bold border-red-500`}
            >
              <span>{t(p.label)}</span>
              {p.chip && (
                <span tw="flex items-center ml-1 py-0.5 px-1 bg-gray-300 dark:bg-gray-600 text-xs font-bold rounded text-gray-400">
                  {t(p.chip)}
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
