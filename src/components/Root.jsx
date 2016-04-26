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
        <Counter name={'red'} value={this.state.red} />
        <Counter name={'green'} value={this.state.green} />
        <Counter name={'blue'} value={this.state.blue} />
      </div>
    );
  }
}
