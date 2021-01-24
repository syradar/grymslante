/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';
import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Skills } from './pages/skills';
import { Dice } from './pages/dice';
import { Names } from './pages/names';
import { Changelog } from './pages/changelog';
import { Items } from './pages/items';
import { useDarkMode } from './services/dark-mode.service';
import { useTranslation } from 'react-i18next';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const { t, i18n } = useTranslation('app');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  if (!componentMounted) {
    return <div />;
  }

  return (
    <Router>
      <div className={`app ${theme}`}>
        <div tw="flex flex-col min-h-screen transition-colors light:bg-gray-100 light:text-gray-800 dark:bg-gray-900 dark:text-gray-300">
          <div tw="pb-4 flex-auto flex-shrink-0">
            <div tw="p-1 px-3 mb-3  flex justify-end">
              <button
                tw="py-1 px-2 rounded bg-gray-300 dark:bg-gray-700 text-xs"
                onClick={() => toggleTheme()}
              >
                {theme === 'dark'
                  ? t('Back to the Light')
                  : t('Embrace the Darkness')}
              </button>
            </div>
            <button onClick={() => changeLanguage('sv')}>sv</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
            <h1 tw="px-3 text-2xl mb-3 font-bold text-gray-400 dark:text-gray-400 ">
              {t('Grymslante')}
            </h1>
            <h1 tw="px-3 text-2xl mb-3 font-bold text-gray-400 dark:text-gray-400 ">
              {/* <Trans >A tool for Trudvang</Trans> */}Tool
            </h1>

            <Navbar />
            <div tw="px-3 container mx-auto">
              <Switch>
                <Route exact path="/">
                  <Names />
                </Route>
                <Route path="/skills">
                  <Skills />
                </Route>
                <Route path="/dice">
                  <Dice />
                </Route>
                <Route path="/names">
                  <Names />
                </Route>
                <Route path="/changelog">
                  <Changelog />
                </Route>
                <Route path="/items">
                  <Items />
                </Route>
              </Switch>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
