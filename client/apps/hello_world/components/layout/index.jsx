import React from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import Errors from './errors';

export default class Index extends React.Component {

  static propTypes = {
    children: PropTypes.node
  }

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Errors />
        {this.props.children || ''}
      </div>
    );
  }
}
