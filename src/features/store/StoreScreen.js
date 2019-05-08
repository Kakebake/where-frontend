import React, { Component } from 'react';
import { connect } from 'react-redux';
import './StoreScreen.css';
import { StoreList } from '../../components/list';

class StoreScreen extends Component {
  store = this.props.api.stores.find(store => {
    return store.id === this.props.match.params.id;
  });

  render() {
    return (
      <div className="StoreScreen">
        {this.store && (
          <div>
            <div>{this.store.name}</div>
            <div>{this.store.info}</div>
            <div>{this.store.url}</div>
          </div>
        )}
        {!this.store && <StoreList stores={this.props.api.stores} />}
      </div>
    );
  }
}

StoreScreen.propTypes = {};

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(StoreScreen);
