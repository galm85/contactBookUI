import React from 'react';
import './App.css';
import {Switch,Route } from 'react-router-dom'

//components
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';


function App() {
  return (
    <React.Fragment>
    <header><Navbar /></header>
    <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
    </main>
    <footer></footer>
    </React.Fragment>
  );
}

export default App;
