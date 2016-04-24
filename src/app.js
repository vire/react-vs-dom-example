window.onload = function() {
  var counterElems = [];
  var initialState = {
    counters: {
      first: 0,
      second: 101,
      third: 42,
    }
  };
  var state = {
    counters: {
      first: initialState.counters['first'],
      second: initialState.counters['second'],
      third: initialState.counters['third'],
    }
  };

  function Counter(name, value) {
    var capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    var counterEl = document.createElement('div');
    var title = document.createElement('span');
    var valueBox = document.createElement('span');

    counterEl.className = name + '-counter';
    title.innerText = capitalizedName + ' counter value: ';
    valueBox.className = 'counter-value';
    valueBox.innerText = value;
    counterEl.appendChild(title);
    counterEl.appendChild(valueBox);

    this.name = name;
    this.valueBox = valueBox;
    this.DOMNode = counterEl;
  }

  var clickHandler = function(value) {
    Object.keys(state.counters).forEach(function(name) {
      state.counters[name] = value
        ? state.counters[name] + value
        : initialState.counters[name];
      var counter = counterElems.filter(function(counterInstance) {
        return counterInstance.name === name;
      })[0];

      if (counter) {
        counter.valueBox.innerText = state.counters[name];
      }
    });
  }

  counterElems.push(new Counter('first', state.counters['first']));
  counterElems.push(new Counter('second', state.counters['second']));
  counterElems.push(new Counter('third', state.counters['third']));

  var incrementButton = document.createElement('button');
  incrementButton.innerText = 'increment';
  incrementButton.onclick = clickHandler.bind(undefined, 1);

  var incrementByTwoButton = document.createElement('button');
  incrementByTwoButton.innerText = 'increment by 2';
  incrementByTwoButton.onclick = clickHandler.bind(undefined, 2);

  var decrementButton = document.createElement('button');
  decrementButton.innerText = 'decrement';
  decrementButton.onclick = clickHandler.bind(undefined, -1);

  var decrementByTwoButton = document.createElement('button');
  decrementByTwoButton.innerText = 'decrement by 2';
  decrementByTwoButton.onclick = clickHandler.bind(undefined, -2);

  var resetButton = document.createElement('button');
  resetButton.innerText = 'reset';
  resetButton.onclick = clickHandler.bind(undefined, 0);

  // display
  counterElems.forEach(function(counterEl) {
    document.body.appendChild(counterEl.DOMNode);
  })
  // controls
  document.body.appendChild(incrementButton);
  document.body.appendChild(incrementByTwoButton);
  document.body.appendChild(resetButton);
  document.body.appendChild(decrementButton);
  document.body.appendChild(decrementByTwoButton);
}
