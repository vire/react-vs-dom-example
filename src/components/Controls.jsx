import React from 'react';

export default class Controls extends React.Component {
  render() {
    return (
      <div>
        <button>increment</button>
        <button>increment by 20</button>
        <button>reset</button>
        <button>decrement</button>
        <button>decrement by 20</button>
      </div>
    );
  }
}
