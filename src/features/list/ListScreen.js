import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ListScreen.css';

class ListScreen extends Component {
  render() {
    return (
      <div className="ListScreen">
        <div className="ListScreen-leftList">
          <p className="ListScreen-listHeader">Stores</p>
          <ul>
            <li>Store one</li>
            <li>Store two</li>
            <li>Store three</li>
          </ul>
        </div>
        <div className="ListScreen-rightList">
          <p className="ListScreen-listHeader">Brands</p>
          <ul className="ListScreen-list">
            <li>Brand one</li>
            <li>Brand two</li>
            <li>Brand three</li>
            <li>s</li>
          </ul>
        </div>
      </div>
    );
  }
}

ListScreen.propTypes = {};

export default connect(ListScreen);
