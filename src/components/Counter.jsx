import React from 'react';
import Controls from './Controls';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export default class Counter extends React.Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    updateCounter: React.PropTypes.func.isRequired,
    value: React.PropTypes.number.isRequired,
  }

  render() {
    return (
      <div>
        <span>{capitalize(this.props.name)} counter value: {this.props.value}</span>
        <Controls onClick={this.props.updateCounter} />
      </div>
    );
  }
}
