import React from 'react';

export default class Counter extends React.Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired,
  }

  render() {
    return (
      <div>
        {this.props.name} counter value: {this.props.value}
      </div>
    );
  }
}
