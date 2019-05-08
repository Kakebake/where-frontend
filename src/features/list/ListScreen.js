import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreList, BrandList } from '../../components/list';
import './ListScreen.css';

class ListScreen extends Component {
  render() {
    return (
      <div className="ListScreen">
        <div className="ListScreen-leftList">
          <p className="ListScreen-listHeader">Stores</p>
          <StoreList stores={this.props.api.stores} />
        </div>
        <div className="ListScreen-rightList">
          <p className="ListScreen-listHeader">Brands</p>
          <BrandList brands={this.props.api.brands} />
        </div>
      </div>
    );
  }
}

ListScreen.propTypes = {};

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(ListScreen);
