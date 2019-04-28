import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import './features/map/MapScreen';
import MapScreen from './features/map/MapScreen';
import ListScreen from './features/list/ListScreen';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">{this.props.map.title}</h1>
            <Link to="/map" className="App-link">
              Map
            </Link>
            <Link to="/list" className="App-link">
              List
            </Link>
            <Link to="/add" className="App-link">
              Add
            </Link>
            <Link to="/profile" className="App-link">
              Profile
            </Link>
          </header>
          <body>
            <Route path="/map" component={MapScreen} />
            <Route path="/list" component={ListScreen} />
            <Route path="/add" component={Add} />
            <Route path="/profile" component={Profile} />
          </body>
        </div>
      </Router>
    );
  }
}

const Add = () => {
  return <p className="App-intro">Addadd</p>;
};

const Profile = () => {
  return <p className="App-intro">Profilefile</p>;
};

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(App);
