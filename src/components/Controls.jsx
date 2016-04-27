import React from 'react';

export default class Controls extends React.Component {

  static propTypes = {
    onClick: React.PropTypes.func.isRequired,
  }

  handleClick(amount) {
    this.props.onClick(amount);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this, 1)}>increment</button>
        <button onClick={this.handleClick.bind(this, 20)}>increment by 20</button>
        <button onClick={this.handleClick.bind(this, 0)}>reset</button>
        <button onClick={this.handleClick.bind(this, -1)}>decrement</button>
        <button onClick={this.handleClick.bind(this, -20)}>decrement by 20</button>
      </div>
    );
  }
}
