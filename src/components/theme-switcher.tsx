/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';
import { filterButtonStyle } from '../styles';
import { Theme } from '../services/dark-mode.service';

interface ThemeSwitcherProps {
  toggleTheme: () => void;
  theme: Theme;
}

export const ThemeSwitcher = ({ theme, toggleTheme }: ThemeSwitcherProps) => {
  return (
    <div tw="">
      <button css={[filterButtonStyle()]} onClick={() => toggleTheme()}>
        {theme === 'dark' ? 'Back to the Light' : 'Embrace the Darkness'}
      </button>
    </div>
  );
};
