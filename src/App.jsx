import React from 'react';
import './App.css';
import {Switch,Route } from 'react-router-dom'

//components
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';


function App() {
  return (
    <React.Fragment>
    <header><Navbar /></header>
    <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
    </main>
    <footer></footer>
    </React.Fragment>
  );
}

export default App;
