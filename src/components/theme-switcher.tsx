/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';
import { filterButtonStyle } from '../styles';
import { Theme } from '../services/dark-mode.service';
import { useTranslation } from 'react-i18next';

interface ThemeSwitcherProps {
  toggleTheme: () => void;
  theme: Theme;
}

export const ThemeSwitcher = ({ theme, toggleTheme }: ThemeSwitcherProps) => {
  const { t } = useTranslation('core');

  return (
    <div>
      <button css={[filterButtonStyle()]} onClick={() => toggleTheme()}>
        {theme === 'dark' ? t('Back to the Light') : t('Embrace the Darkness')}
      </button>
    </div>
  );
};
