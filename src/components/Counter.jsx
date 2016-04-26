import React from 'react';

export default class Counter extends React.Component {

  static propTypes = {
    value: React.PropTypes.number.isRequired,
  }

  render() {
    return <span>{this.props.value}</span>;
  }
}
