import React from 'react';
import Counter from './Counter';

const stateToRGB = state => {
  const color = Object.keys(state).map(colorName => state[colorName]).join(',');
  return `rgb(${color})`;
};

const limit = val => {
  if (val && val > 255) {
    return 255;
  } else if (val && val < 0) {
    return 0;
  } else if (val) {
    return val;
  }
  return 0;
};

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
