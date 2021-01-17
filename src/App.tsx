/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Skills } from './pages/skills';
import { Dice } from './pages/dice';
import { Home } from './pages/home';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router basename="/grymslante">
      <div className={`app ${darkMode ? 'dark' : 'light'}`}>
        <div tw="min-h-screen py-4 px-3 transition-colors light:bg-gray-50 dark:bg-gray-900 dark:text-gray-50">
          <button
            tw="py-2 px-3 border mb-3"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? 'Back to the Light' : 'Embrace the Darkness'}
          </button>
          <h1 tw="text-2xl mb-3 font-bold text-red-700 dark:text-red-400 ">
            Grymslante
          </h1>

          <Navbar />

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
    </Router>
  );
}

export default App;
