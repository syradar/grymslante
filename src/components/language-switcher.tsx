/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';
import { filterButtonStyle } from '../styles';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation('core');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button
        css={[tw`mr-2`, filterButtonStyle(i18n.language === 'en')]}
        onClick={() => changeLanguage('en')}
        disabled={i18n.language === 'en'}
      >
        {t('English')}
      </button>
      <button
        css={[filterButtonStyle(i18n.language === 'sv')]}
        onClick={() => changeLanguage('sv')}
        disabled={i18n.language === 'sv'}
      >
        {t('Swedish')}
      </button>
    </div>
  );
};
