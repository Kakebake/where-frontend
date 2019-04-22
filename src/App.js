import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import './features/map/MapScreen';
import MapScreen from './features/map/MapScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {this.props.map.title}</h1>
        </header>
        <p className="App-intro">
          To gets started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MapScreen />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(App);
