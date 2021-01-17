/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Skills } from './pages/skills';
import { Dice } from './pages/dice';
import { Home } from './pages/home';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router basename="/grymslante">
      <div className={`app ${darkMode ? 'dark' : 'light'}`}>
        <div tw="flex flex-col min-h-screen transition-colors light:bg-gray-50 dark:bg-gray-900 dark:text-gray-50">
          <div tw="pb-4 flex-auto flex-shrink-0">
            <div tw="p-1 px-3 mb-3 bg-gray-100 dark:bg-gray-800 flex justify-end">
              <button
                tw="py-1 px-2 rounded bg-gray-200 dark:bg-gray-700 text-xs"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? 'Back to the Light' : 'Embrace the Darkness'}
              </button>
            </div>
            <h1 tw="px-3 text-2xl mb-3 font-bold text-gray-400 dark:text-gray-400 ">
              Grymslante
            </h1>

            <Navbar />
            <div tw="px-3">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/skills">
                  <Skills />
                </Route>
                <Route path="/dice">
                  <Dice />
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
