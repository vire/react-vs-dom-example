import React from 'react';
import Counter from './Counter';
import { limit, stateToRGB } from '../utils';

export default class Root extends React.Component {

  constructor(props) {
    super(props);
    this.defaultState = {
      red: 83,
      green: 124,
      blue: 190,
    };

    this.state = Object.assign({}, this.defaultState);
  }

  updateCounter(name, amount) {
    console.log(`Counter: ${name} was clicked with ${amount}`);
    this.setState(
      Object.assign({}, this.state, {
        [name]: amount ? limit(this.state[name] + amount) : this.defaultState[name],
      })
    );
  }

  render() {
    const background = stateToRGB(this.state);

    return (
      <div style={{ background }}>
        <Counter
          name={'red'}
          updateCounter={this.updateCounter.bind(this, 'red')}
          value={this.state.red}
        />
        <Counter
          name={'green'}
          updateCounter={this.updateCounter.bind(this, 'green')}
          value={this.state.green}
        />
        <Counter
          name={'blue'}
          updateCounter={this.updateCounter.bind(this, 'blue')}
          value={this.state.blue}
        />
      </div>
    );
  }
}
