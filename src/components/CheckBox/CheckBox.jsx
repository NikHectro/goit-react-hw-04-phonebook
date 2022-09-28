import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CheckBox extends Component {
  //   static propTypes = { second: third };

  state = {
    name: false,
  };

  handleCheckBox = event => {
    console.log(event.target.value);
    this.setState(prevState => {
      return {
        name: !prevState.name,
      };
    });
  };

  render() {
    return (
      <label htmlFor="checkbox">
        <input
          id="checkbox"
          type="checkbox"
          onChange={this.handleCheckBox}
          value={this.state.name}
        />
      </label>
    );
  }
}
