import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers/customers';
import Search from './components/search/search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Carpool</h1>
        </header>
        <Customers />
        <Search />
      </div>
    );
  }
}

export default App;
