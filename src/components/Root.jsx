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

  updateCounter(name, amount) {
    console.log(`Counter: ${name} was clicked with ${amount}`);
    this.setState(
      Object.assign({}, this.state, {
        [name]: this.state[name] + amount,
      })
    );
  }

  render() {
    return (
      <div>
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
