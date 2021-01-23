/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';
import { dynamicActivate, locales } from '../i18n';
import { useLingui } from '@lingui/react';
import { filterButtonStyle } from '../styles';

export const LocaleSwitcher = () => {
  const { i18n } = useLingui();

  return (
    <div>
      <button
        css={[tw`mr-2`, filterButtonStyle(i18n.locale === 'en')]}
        onClick={() => dynamicActivate('en')}
        disabled={i18n.locale === 'en'}
      >
        {locales.en}
      </button>
      <button
        css={[filterButtonStyle(i18n.locale === 'sv')]}
        onClick={() => dynamicActivate('sv')}
        disabled={i18n.locale === 'sv'}
      >
        {locales.sv}
      </button>
    </div>
  );
};
