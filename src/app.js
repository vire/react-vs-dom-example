window.onload = function() {
  var counterElems = [];
  var counterNames = ['first', 'second', 'third'];
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

  function CounterControls() {
    var wrapper = document.createElement('div');
    var incrementButton = document.createElement('button');
    var incrementByTwoButton = document.createElement('button');
    var decrementButton = document.createElement('button');
    var decrementByTwoButton = document.createElement('button');
    var resetButton = document.createElement('button');

    incrementButton.innerText = 'increment';
    incrementButton.onclick = clickHandler.bind(undefined, 1);

    incrementByTwoButton.innerText = 'increment by 2';
    incrementByTwoButton.onclick = clickHandler.bind(undefined, 2);

    decrementButton.innerText = 'decrement';
    decrementButton.onclick = clickHandler.bind(undefined, -1);

    decrementByTwoButton.innerText = 'decrement by 2';
    decrementByTwoButton.onclick = clickHandler.bind(undefined, -2);

    resetButton.innerText = 'reset';
    resetButton.onclick = clickHandler.bind(undefined, 0);

    wrapper.appendChild(incrementButton);
    wrapper.appendChild(incrementByTwoButton);
    wrapper.appendChild(resetButton);
    wrapper.appendChild(decrementButton);
    wrapper.appendChild(decrementByTwoButton);

    return wrapper;
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

  // display
  counterNames.forEach(function(counterName) {
    var counter = new Counter(counterName, state.counters[counterName]);
    counterElems.push(counter);
    document.body.appendChild(counter.DOMNode);
  });

  // controls
  document.body.appendChild(new CounterControls());
}
