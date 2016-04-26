import React from 'react';
import Counter from './Counter';

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <Counter value={42} />
      </div>
    );
  }
}
