/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';
import React from 'react';
import './App.css';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Skills } from './pages/skills';
import { Dice } from './pages/dice';
import { Names } from './pages/names';
import { Changelog } from './pages/changelog';
import { Items } from './pages/items';
import { useDarkMode } from './services/dark-mode.service';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from './components/theme-switcher';
import { LanguageSwitcher } from './components/language-switcher';
import { Travel } from './pages/travel';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const { t } = useTranslation('core');

  if (!componentMounted) {
    return <div />;
  }

  return (
    <Router>
      <div className={`app ${theme}`}>
        <div tw="flex flex-col min-h-screen transition-colors light:bg-gray-100 light:text-gray-800 dark:bg-gray-900 dark:text-gray-300">
          <div tw="pb-4 flex-auto flex-shrink-0">
            <div tw="pt-3 px-3 mb-6 flex justify-between">
              <LanguageSwitcher></LanguageSwitcher>
              <ThemeSwitcher
                toggleTheme={toggleTheme}
                theme={theme}
              ></ThemeSwitcher>
            </div>

            <h1 className="bilibin" tw="px-3 text-4xl mb-3 text-red-500">
              {t('Grymslante')}
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
                <Route path="/travel">
                  <Travel />
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
