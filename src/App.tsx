import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Skills } from "./components/skills";
import { Dice } from "./components/dice";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/dice">Dice</Link>
          </li>
          <li>
            <Link to="/names">Names</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        {/* <Route exact path="/">
            <App />
          </Route> */}
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/dice">
          <Dice />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
