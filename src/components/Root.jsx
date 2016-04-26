import React from 'react';
import Counter from './Counter';

export default class Root extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      red: 83,
      green: 124,
      blue: 190,
    };
  }

  render() {
    return (
      <div>
        <Counter value={this.state.red} />
        <Counter value={this.state.green} />
        <Counter value={this.state.blue} />
      </div>
    );
  }
}
