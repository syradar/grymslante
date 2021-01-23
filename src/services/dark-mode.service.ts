import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const isTheme = (s: string): s is Theme => s === 'light' || s === 'dark';

export const useDarkMode = (): [Theme, () => void, boolean] => {
  const [theme, setTheme] = useState<Theme>('light');

  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode: Theme) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    if (localTheme && isTheme(localTheme)) {
      setTheme(localTheme);
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      !localTheme
    ) {
      setMode('dark');
    } else {
      setTheme('light');
    }

    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
