import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
class App extends React.Component {
  render() {
    return (
      <div class="App">
      <div><h1>Сайт статей</h1></div>
        <Header />
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
