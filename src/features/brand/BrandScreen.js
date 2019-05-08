import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './BrandScreen.css';

class BrandScreen extends Component {
  brand = this.props.api.brands.find(brand => {
    return brand.id === this.props.match.params.id;
  });

  render() {
    console.log('The props are', this.props.match.params.id);
    return (
      <div className="BrandScreen">
        {this.brand && (
          <div>
            <div>{this.brand.name}</div>
            <div>{this.brand.info}</div>
            <div>{this.brand.url}</div>
          </div>
        )}
        {!this.brand && (
          <div>
            <div>Brand not found.</div>
            <Link to="/list" className="App-link">
              List
            </Link>
          </div>
        )}
      </div>
    );
  }
}

BrandScreen.propTypes = {};

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(BrandScreen);
